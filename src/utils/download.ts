export const triggerDownload = (url: string, filename: string) => {
  let aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("style", "display: none");
  aTag.download = filename;
  document.body.appendChild(aTag);
  aTag.click();
};

/**
 * @param sessionId checkout session id
 * Validates whether the transaction is successful or not
 */
export function validate(sessionId: string) {
  const promise = new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${process.env.REACT_APP_STRIPE_SK}`,
    );

    fetch(
      `${process.env.REACT_APP_STRIPE_API_URL}/checkout/sessions/${sessionId}`,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      },
    )
      .then((response) => response.json())
      .then((result) => {
        const status = result["payment_status"];
        if (status == "paid") {
          resolve(status);
        } else {
          reject("The payment was unsuccessful");
        }
      })
      .catch((error) => reject(error));
  });
  return promise;
}
