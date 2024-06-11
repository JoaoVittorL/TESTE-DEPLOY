import axios from "axios";

export default async function fetchData(valor: string) {
    var response = await axios.post(`https://apidocker-vuvkb3efua-uc.a.run.app/mensagem/${valor}`);
    console.log(response)
}



    // try {
    //     const response = await fetch(
    //         `https://apidocker-vuvkb3efua-uc.a.run.app/mensagem/${valor.toString()}`,
    //         {
    //             method: "POST",
    //             body: JSON.stringify({}),
    //             headers: { "Content-Type": "application/json" },
    //         }
    //     );

    //     // if (!response.ok) {
    //     //     throw new Error(`HTTP error! status: ${response.status}`);
    //     // } 
    //     console.log(response)
    //     const data = await response
    // } catch (error) {
    //     console.error('There was an error!', error);
    // }
