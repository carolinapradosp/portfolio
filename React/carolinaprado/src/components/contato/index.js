import "./contato.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IMaskInput } from "react-imask";


function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cf3f028", "template_al99vqp", form.current, {
        publicKey: "qP2neOSvTWeZxUBHZ",
      })
      .then(
        () => {
          document.querySelector('input[type=submit]').value = "Sua mensagem foi enviada!"
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

      setTimeout(() => {
          document.querySelector('form').reset()
          document.querySelector('input[type=submit]').value = "Enviar"        
      }, 4000);

  };

  return (
    <div className="container formulario">
      <h2>Contato</h2>
      <h6 className="text-center">Se você preferir, pode entrar em contato através do formulário.</h6>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input type="text" name="user_name" placeholder="Nome" required />
        </div>
        <div>
          <input type="email" name="user_email" placeholder="E-mail" required />
        </div>
        <div>
            <IMaskInput mask="(00) 00000-0000" placeholder="Telefone"  name="user_phone" required/>
        </div>
        <div>
          <textarea name="message" placeholder="Mensagem" rows={5} required/>
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
}
export default Contato;
