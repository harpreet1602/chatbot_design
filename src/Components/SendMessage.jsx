import './SendMessage.css';
function SendMessage() {
    return (
      <div className="SendMessage">
              <input className="tag" placeholder="Message" type="text"/>
          <div className="send">Send</div>
        
      </div>
    );
  }
  
  export default SendMessage;