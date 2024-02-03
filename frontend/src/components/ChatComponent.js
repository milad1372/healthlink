import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Talk from 'talkjs';

class ChatComponent extends Component {

    constructor(props) {
        super(props);

        this.inbox = undefined;
    }

    componentDidMount() {
        // Promise can be `then`ed multiple times
        Talk.ready
            .then(() => {
                const me = new Talk.User({
                    id: "12345231",
                    name: "George Looney",
                    email: "george@looney.net",
                    photoUrl: "/user.png",
                    welcomeMessage: "Hey there! How are you? :-)"
                });

                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "tcRQ4b0I",
                        me: me
                    });
                }

                const other = new Talk.User({
                    id: "54321",
                    name: "Health AI",
                    email: "ronald@teflon.com",
                    photoUrl: "/Bot.jpg",
                    welcomeMessage: "Hey there! Love to chat :-)"
                });

                var conversation = window.talkSession.getOrCreateConversation(
                    Talk.oneOnOneId(me, other)
                );
                conversation.setParticipant(me);
                conversation.setParticipant(other);
                var popup = window.talkSession.createPopup();
                popup.select(conversation);
                popup.mount({ show: false });

                var button = document.getElementById('btn-getInTouch');
                button.addEventListener('click', function (event) {
                    event.preventDefault();
                    popup.show();
                });
            })
            .catch(e => console.error(e));


    }

    componentWillUnmount() {
        if (this.inbox) {
            this.inbox.destroy();
        }
    }

    render() {
        return (<span>
            <div style={{height: '500px'}} ref={c => this.container = c}></div>
        </span>);
    }
}

export default ChatComponent;
