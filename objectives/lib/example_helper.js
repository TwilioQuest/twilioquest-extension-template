// This is an example of how you might use objective validation helpers
// in your own code. You don't have to, but you'll often want to!
function isTwilio(testString = '') {
  return testString.toLowerCase() === 'twilio';
}

module.exports = {
  isTwilio
};
