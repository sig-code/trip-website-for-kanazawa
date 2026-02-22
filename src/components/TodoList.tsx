import { useState } from "react";
import {
  Phone,
  ExternalLink,
  CheckCircle2,
  Circle,
  AlertCircle,
} from "lucide-react";
import { initialTodos } from "../data/todos";

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const toggle = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div className="pt-4 space-y-3">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-slate-400 text-xs">
          {doneCount} / {todos.length} 完了
        </span>
        <div className="flex-1 mx-3 h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-gold to-gold-light rounded-full transition-all duration-500"
            style={{ width: `${(doneCount / todos.length) * 100}%` }}
          />
        </div>
        <span className="text-gold text-xs font-medium">
          {Math.round((doneCount / todos.length) * 100)}%
        </span>
      </div>

      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`rounded-xl p-4 border transition-all ${
            todo.urgent && !todo.done
              ? "bg-red-500/8 border-red-500/25"
              : todo.done
                ? "bg-slate-800/20 border-slate-700/20 opacity-60"
                : "bg-slate-800/40 border-slate-700/30"
          }`}
        >
          <button
            onClick={() => toggle(todo.id)}
            className="flex items-start gap-3 w-full text-left active:opacity-70"
          >
            <div className="mt-0.5 shrink-0">
              {todo.done ? (
                <CheckCircle2 size={18} className="text-emerald-400" />
              ) : todo.urgent ? (
                <AlertCircle size={18} className="text-red-400" />
              ) : (
                <Circle size={18} className="text-slate-600" />
              )}
            </div>
            <span
              className={`text-sm leading-relaxed ${
                todo.done ? "line-through text-slate-500" : "text-slate-200"
              }`}
            >
              {todo.text}
            </span>
          </button>

          {/* Actions */}
          {!todo.done && (todo.phone || todo.link) && (
            <div className="mt-2 ml-7 flex gap-3">
              {todo.phone && (
                <a
                  href={`tel:${todo.phone}`}
                  className="flex items-center gap-1.5 text-xs text-sky-400 active:opacity-70"
                >
                  <Phone size={11} />
                  <span>{todo.phone}</span>
                </a>
              )}
              {todo.link && (
                <a
                  href={todo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gold/70 active:opacity-70"
                >
                  <ExternalLink size={11} />
                  <span>サイトを開く</span>
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
