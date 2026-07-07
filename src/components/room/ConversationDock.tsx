"use client"

import * as React from "react"
import { FloatingPanel } from "@/components/shared/FloatingPanel"
import { VoiceButton } from "@/components/shared/VoiceButton"
import { MessageSquare, Camera, History, User, Settings } from "lucide-react"

export interface ConversationDockProps {
  onChatClick?: () => void;
  isListening?: boolean;
  onVoiceClick?: () => void;
}

export function ConversationDock({ onChatClick, isListening, onVoiceClick }: ConversationDockProps) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
      <FloatingPanel className="flex items-center gap-4 px-6 py-3 rounded-full backdrop-blur-xl bg-card/60 shadow-[var(--shadow-soft)] border-border/40">
        <button className="p-3 rounded-full text-secondary-text hover:text-primary-text hover:bg-muted/50 transition-colors">
          <History className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-full text-secondary-text hover:text-primary-text hover:bg-muted/50 transition-colors">
          <Camera className="w-5 h-5" />
        </button>

        <div className="mx-2 -mt-10">
          <VoiceButton 
            isListening={isListening} 
            onClick={onVoiceClick} 
            className="w-20 h-20 shadow-lg border-none"
          />
        </div>

        <button onClick={onChatClick} className="p-3 rounded-full text-secondary-text hover:text-primary-text hover:bg-muted/50 transition-colors">
          <MessageSquare className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-full text-secondary-text hover:text-primary-text hover:bg-muted/50 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </FloatingPanel>
    </div>
  )
}
