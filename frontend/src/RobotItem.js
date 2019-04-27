import React, { useContext } from 'react'
import { Image } from 'semantic-ui-react'
import { MessageManger } from './MessageProvider'

export default function RobotItem(props){
	const messageList = document.getElementById('message-list')
	const dispatch = useContext(MessageManger)[2][1]
	async function hanldeStateChange(data = props.data){
		await dispatch({ type: data.action, data })
		try {
			messageList.scrollTop = messageList.scrollHeight
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div onClick={() => hanldeStateChange()} className='side_box'>
			<div>
				<Image src={props.data.icon} />
				<span className='online_icon' />
			</div>

			<div className='robot_box'>
				<div>{props.data.title}</div>
				<p>{props.data.info}</p>
			</div>
		</div>
	)
}
