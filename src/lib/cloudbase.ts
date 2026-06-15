import cloudbase from "@cloudbase/js-sdk";

const app = cloudbase.init({
  env: "zeh-d7glqc07me2155c61",
});

const auth = app.auth();
let authReady = false;

export async function ensureAuth() {
  if (authReady) return;
  const loginState = await auth.getLoginState();
  if (!loginState) {
    await auth.signInAnonymously();
  }
  authReady = true;
}

export const db = app.database();

export default app;
