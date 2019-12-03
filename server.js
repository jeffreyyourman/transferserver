const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/chatbot', (req, res) => {
    const type = req.query.datatype;
    switch (type) {
        case "initial":
            console.log('type', type);
            res.json({
                type: "initial",
                date: "14 Nov 9:10:7 AM",
                botRenderingInfo: null,
                disclaimer: null,
                mediaTypes: [],
                messageResponse: "",
                renderingType: "PLAIN_TEXT",
                suggestionChips: [
                    { identifier: "General-Information", description: "General Information" },
                    { identifier: "Ask RM", description: "Ask RM" },
                    { identifier: "Ethics and Compliance", description: "Ethics and Compliance" },
                    { identifier: "Events and Meetings", description: "Events and Meetings" },
                    { identifier: "Audit Bot", description: "Audit" },
                    { identifier: "Newcomer Portal", description: "NewComer Portal" },
                    { identifier: "Policy Center", description: "Policy Center" }
                ],
                suggestionChipsTitle: "How can I help you? You can type a message or tap on an on-screen option.",
                tabularInfo: null,
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzM3NDQyMDYsInVzZXJfbmFtZSI6Imp5b3VybWFuQGtwbWcuY29tIiwianRpIjoiNTE4MTY3MTktOWY3MS00OTZkLThmYWYtNjdiMTU4MDM4N2UzIiwiY2xpZW50X2lkIjoia3BtZy1rdGVjaC1pYm90Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.XU0G-lnGHXkW6WaO-pIpdZP-H-5eoiG96zKm7lujKh4",
                urlInfo: null
            })
            break;
        case "General Information":
            console.log('type', type);
            res.json({
                type: "General-Information",
                botRenderingInfo: null,
                date: "14 Nov 9:57:34 AM",
                disclaimer: null,
                mediaTypes: [],
                messageResponse: "",
                renderingType: "PLAIN_TEXT",
                suggestionChips: [
                    { identifier: "what is the guest wireless password", description: "Guest Wireless Password" },
                    { identifier: "what are the firm holidays", description: "Firm Holidays" },
                    { identifier: "acronyms", description: "Acronyms" }
                ],
                suggestionChipsTitle: "I understand you are looking for general KPMG Information. Could you please choose one of the below options or type in what you are looking for.",
                tabularInfo: null,
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzM3NDcwNTEsInVzZXJfbmFtZSI6Imp5b3VybWFuQGtwbWcuY29tIiwianRpIjoiYjFiYTAwNDMtNDhlNy00NDE1LTg0ZWYtYmU5NjY4Zjc2ZjMxIiwiY2xpZW50X2lkIjoia3BtZy1rdGVjaC1pYm90Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.qDDOyJ-J-0WLFGe0FtXKd0B9dUXw5-vZBImVg3AiLtY",
                urlInfo: null

            })

            break;
        case "Guest Wireless Password":
            console.log('type', type);
            res.json({
                type: "what is the guest wireless password", //maybe use regex to search wireless password.  
                botRenderingInfo: null,
                date: "14 Nov 9:58:15 AM",
                disclaimer: null,
                mediaTypes: [],
                messageResponse: "Sure, I can help you with that. The username is guestnovember and the password is axxeuTZM",
                renderingType: "PLAIN_TEXT",
                suggestionChips: [],
                suggestionChipsTitle: null,
                tabularInfo: null,
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzM3NDcwNTEsInVzZXJfbmFtZSI6Imp5b3VybWFuQGtwbWcuY29tIiwianRpIjoiYjFiYTAwNDMtNDhlNy00NDE1LTg0ZWYtYmU5NjY4Zjc2ZjMxIiwiY2xpZW50X2lkIjoia3BtZy1rdGVjaC1pYm90Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.qDDOyJ-J-0WLFGe0FtXKd0B9dUXw5-vZBImVg3AiLtY",
                urlInfo: null
            })
        // case "ListAll":
        //     console.log('type', type);
        //     res.json({
        //         type: "what is the guest wireless password", //maybe use regex to search wireless password.  
        //         botRenderingInfo: null,
        //         date: "14 Nov 9:58:15 AM",
        //         disclaimer: null,
        //         mediaTypes: [],
        //         messageResponse: "Sure, I can help you with that. The username is guestnovember and the password is axxeuTZM",
        //         renderingType: "PLAIN_TEXT",
        //         suggestionChips: [],
        //         suggestionChipsTitle: null,
        //         tabularInfo: null,
        //         token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzM3NDcwNTEsInVzZXJfbmFtZSI6Imp5b3VybWFuQGtwbWcuY29tIiwianRpIjoiYjFiYTAwNDMtNDhlNy00NDE1LTg0ZWYtYmU5NjY4Zjc2ZjMxIiwiY2xpZW50X2lkIjoia3BtZy1rdGVjaC1pYm90Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.qDDOyJ-J-0WLFGe0FtXKd0B9dUXw5-vZBImVg3AiLtY",
        //         urlInfo: null
        //     })
        default:
            break;
    }
    // res.json({ initialBotData, generalInfoData, guestWirelessPass })
})

app.listen('8090', () => {
    console.log('listening on port 8080');
})