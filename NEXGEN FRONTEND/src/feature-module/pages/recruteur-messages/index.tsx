import { useEffect, useState, useRef } from "react";
import dashboardService, { type Conversation, type Message } from "../../../services/dashboard.service";
import authService from "../../../services/auth.service";

const RecruteurMessages = () => {
  const currentUser = authService.getUser();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [sending, setSending] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Load conversations
  useEffect(() => {
    const load = async () => {
      const result = await dashboardService.getConversations();
      if (result.success && result.data) {
        setConversations(result.data);
      }
      setLoading(false);
    };
    load();
  }, []);

  // Load messages when a conversation is selected
  useEffect(() => {
    if (!selectedId) return;

    const loadMessages = async () => {
      setLoadingMessages(true);
      const result = await dashboardService.getMessages(selectedId);
      if (result.success && result.data) {
        setMessages(result.data);
      }
      setLoadingMessages(false);
    };
    loadMessages();
  }, [selectedId]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!messageInput.trim() || !selectedId || sending) return;

    setSending(true);
    const content = messageInput.trim();
    setMessageInput("");

    const result = await dashboardService.sendMessage(selectedId, content);
    if (result.success) {
      // Add message locally
      setMessages((prev) => [
        ...prev,
        {
          id: result.data?.message_id || Date.now(),
          sender_id: currentUser?.id || 0,
          content,
          created_at: new Date().toISOString(),
        },
      ]);

      // Update conversation preview
      setConversations((prev) =>
        prev.map((c) =>
          c.id === selectedId
            ? { ...c, last_message: content, last_message_at: new Date().toISOString() }
            : c
        )
      );
    }
    setSending(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const selected = conversations.find((c) => c.id === selectedId);

  if (loading) {
    return (
      <div className="nex-dash-page">
        <div className="nex-dash-page__header">
          <h1 className="nex-dash-page__title">Messagerie</h1>
        </div>
        <div className="nex-dash-card">
          <div className="nex-dash-card__body" style={{ textAlign: "center", padding: 40 }}>
            <span className="spinner-border" role="status" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nex-dash-page">
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">Messagerie</h1>
        <p className="nex-dash-page__subtitle">
          Échangez avec les talents
        </p>
      </div>

      {conversations.length > 0 ? (
        <div className="nex-dash-messages">
          {/* Conversation list */}
          <div className="nex-dash-msg-list">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`nex-dash-msg-list__item ${
                  selectedId === conv.id ? "nex-dash-msg-list__item--active" : ""
                }`}
                onClick={() => setSelectedId(conv.id)}
              >
                <img
                  src={conv.participant_avatar}
                  alt={conv.participant_name}
                  className="nex-dash-msg-list__avatar"
                />
                <div className="nex-dash-msg-list__info">
                  <div className="nex-dash-msg-list__name">
                    {conv.participant_name}
                    {conv.unread_count > 0 && (
                      <span className="nex-dash-msg-list__badge">{conv.unread_count}</span>
                    )}
                  </div>
                  <div className="nex-dash-msg-list__preview">
                    {conv.last_message}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat area */}
          <div className="nex-dash-msg-chat">
            {selected ? (
              <>
                <div className="nex-dash-msg-chat__header">
                  {selected.participant_name}
                </div>
                <div className="nex-dash-msg-chat__body" ref={chatBodyRef}>
                  {loadingMessages ? (
                    <div style={{ textAlign: "center", padding: 40 }}>
                      <span className="spinner-border spinner-border-sm" role="status" />
                    </div>
                  ) : messages.length > 0 ? (
                    messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`nex-dash-msg-bubble ${
                          msg.sender_id === currentUser?.id
                            ? "nex-dash-msg-bubble--sent"
                            : "nex-dash-msg-bubble--received"
                        }`}
                      >
                        <div className="nex-dash-msg-bubble__content">{msg.content}</div>
                        <div className="nex-dash-msg-bubble__time">
                          {new Date(msg.created_at).toLocaleTimeString("fr-FR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ textAlign: "center", padding: 40, color: "#9ca3af" }}>
                      Aucun message dans cette conversation
                    </div>
                  )}
                </div>
                <div className="nex-dash-msg-chat__input">
                  <input
                    type="text"
                    placeholder="Écrivez votre message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={sending}
                  />
                  <button
                    className="nex-dash-btn nex-dash-btn--primary"
                    onClick={handleSend}
                    disabled={sending || !messageInput.trim()}
                  >
                    {sending ? "..." : "Envoyer"}
                  </button>
                </div>
              </>
            ) : (
              <div className="nex-dash-msg-chat__empty">
                Sélectionnez une conversation
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="nex-dash-card">
          <div className="nex-dash-card__body">
            <div className="nex-dash-empty">
              <div className="nex-dash-empty__icon">
                <i className="ti ti-message" />
              </div>
              <h4 className="nex-dash-empty__title">Aucun message</h4>
              <p className="nex-dash-empty__text">
                Vous n'avez pas encore de conversation. Contactez un talent
                pour démarrer un échange.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruteurMessages;
