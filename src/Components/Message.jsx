import './Message.css';
function Message() {
    return (
      <div className="Message">
          <div className="heading">
              <div className="name">Anushka</div>
              <div className="time">12:32 pm</div>
          </div>
          <div className="text">Inside which HTML element do we put the JavaScript?</div>
          <div className="optioncontainer">
              <div className="option">{"<scripting>"}</div>
              <div className="option">{"<script>"}</div>
              <div className="option">{"<js>"}</div>
              <div className="option">{"<javascript>"}</div>
          </div>
      </div>
    );
  }
  
  export default Message;