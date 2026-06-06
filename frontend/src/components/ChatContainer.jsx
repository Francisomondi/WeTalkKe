import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageSkeleton from './skeletons/MessageSkeleton'

const ChatContainer = () => {

 const {message,getMessages,isMessagesLoading,selectedUser} = useChatStore()

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
      <p>Messages...</p>

      <MessageInput />
      
    </div>
  )
}

export default ChatContainer
