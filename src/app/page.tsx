import Button from "@/components/Button";
import api from "../service/api";

async function Page() {

  let valor = "carcara";
  const response = await fetch(
    `https://apidocker-vuvkb3efua-uc.a.run.app/mensagem/${valor}`,
    {
      method: "post",
      body: "",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) => response);

  console.log(response);

  return (
    <main className="min-h-screen bg-black justify-center">
      <Button />
    </main>
  );
}

export default Page;
