export interface SendMailData {
    subject: string, 
    body: string
}

export interface Send {
    sendMail: (data: SendMailData) => Promise<void>;
}