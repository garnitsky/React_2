
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    debugger;
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElements = state.messages.map(messages => <Message message={messages.message} key={messages.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder="Enter your messsage">
                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;