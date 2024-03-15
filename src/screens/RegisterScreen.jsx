import { Link } from "react-router-dom";

export default function RegisterScreen() {
  return (
    <>
      <Link to=".." className="ml-2 mt-2">
        <button>Voltar</button>
      </Link>
      <h1 className="text-center mt-24">Resgistrar</h1>
      <div className="flex flex-1 flex-col justify-center items-center">
        <div id="form">
          <form>
            <p>nome</p>
            <p>placa</p>
            <p>tipo</p>
            <p>preferencial</p>
            <button>aa</button>
          </form>
        </div>
      </div>
    </>
  );
}
