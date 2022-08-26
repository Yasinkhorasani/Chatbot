
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import NivramAvatar from '../components/NivramAvatar.js';
import DogPicture from '../components/DogPicture.js'


const botName = 'Nivram'

const config = {
    initialMessages: [createChatBotMessage(`Oh no, a human! I'm ${botName}`)],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
    customComponents: {
        botAvatar: (props) => <NivramAvatar {...props} />
    },
    widgets: [
        {
          widgetName: 'dogPicture',
          widgetFunc: (props) => <DogPicture {...props} />,
        },
    ],
};

export default config;