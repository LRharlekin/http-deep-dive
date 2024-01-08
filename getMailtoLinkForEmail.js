// Complete the getMailtoLinkForEmail function. It should return a "mailto" hyperlink for the given email.

function getMailtoLinkForEmail(email) {
  return `mailto:${email}`;
}

let email = "slayer@fquest.app";
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`);
email = "killer@fquest.app";
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`);
