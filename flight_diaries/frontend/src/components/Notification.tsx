import React from 'react'
import { NotificationType } from '../types'

interface notificationProps{
    notificationType: NotificationType
    msg: string
}

const Notification = (props: notificationProps) => {
  const styleClass = props.notificationType
  if(props.msg === '')
    return null
  else
    return (
      <div className={`${styleClass} notification`} data-testid='notification'>
        {props.msg}
      </div>
    )
}

export default Notification