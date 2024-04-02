async function actionDelay() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 999);
  });
}
export default actionDelay;
