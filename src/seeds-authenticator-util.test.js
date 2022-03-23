const SeedsAuthenticator = require("./main");

it("Gets the details for creating new session", async () => {
  const authenticator = new SeedsAuthenticator();
  const accountName = "aleksandar11";
  const newSession = await authenticator.newSession({ accountName });
  expect(newSession).toBeTruthy();
});

it("Returns the account details for provided token", async () => {
  const authenticator = new SeedsAuthenticator();
  const accountName = "aleksandar11";
  const { id, token } = await authenticator.newSession({ accountName });

  const info = await authenticator.getAccountInfo({ token, backendUserId: id });
  expect(info).toBeTruthy();
});
