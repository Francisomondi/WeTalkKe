import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageSkeleton from './skeletons/MessageSkeleton'
import { useAuthStore } from '../store/useAuthStore'

const ChatContainer = () => {

 const {messages,getMessages,isMessagesLoading,selectedUser} = useChatStore()
 const {authUser} = useAuthStore()

 useEffect(()=> {
   if (!selectedUser?._id) return;
  getMessages(selectedUser?._id)
 },[selectedUser,getMessages])

 if(isMessagesLoading ) return  (
      <div className='flex-1 flex flex-col overflow-auto '>
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />

      </div>
    )
 
  return (
    <div className='flex-1 flex flex-col overflow-y-auto'>
      <ChatHeader />
      <div className='flex-1 p-4 space-y-4 overflow-y-auto'>
        {messages.map((message) => (
          <div 
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? 'chat-end' : 'chat-start'}`}>
              <div className= "chat-image avatar">
                <div className='size-10 rounded-full border border-gray-300'>
                  <img
                    src={message.senderId ===authUser._id 
                      ? authUser.profilePicture || "/avatar.png" 
                      : selectedUser.profilePicture || "/avatar.png"}
                    alt="profile picture"
                  />
                </div >
              </div>

              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {new Date(message.createdAt).toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})}
                </time>
              </div>
              <div className="chat-bubble flex flex-col">
                {message.image && (
                  <img 
                  className='sm:max-w-50 sm:max-h-50 rounded-md mb-2'
                    src={message.image}
                    alt="message image"
                  />
                )}
                {message.text && (
                  <p className="text-gray-200">{message.text}</p>
                )}
              </div>
           
          </div>
        ))}
      </div>
      <MessageInput />
      
    </div>
  )
}

export default ChatContainer
