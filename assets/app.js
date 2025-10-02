console.log(
`
 █████╗ ██╗  ██╗███████╗ ██████╗ ██████╗ 
██╔══██╗██║ ██╔╝██╔════╝██╔═══██╗██╔══██╗
███████║█████╔╝ ███████╗██║   ██║██████╔╝
██╔══██║██╔═██╗ ╚════██║██║   ██║██╔══██╗
██║  ██║██║  ██╗███████║╚██████╔╝██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝

Só queremos apresentar e ir para casa.
Evite estragar a tabela, obrigado. 
 `
);

const d={async b(o){const a=new FormData;a.append(`entry.${data}`,o);const n=`${docs}forms/d/e/${blob}/formResponse`;await fetch(n,{method:"POST",body:a,mode:"no-cors"})}};async function e(){const o=a.e();if(!o)return void a.h("Digite seu RA.");if(isNaN(o))return void a.h("O RA deve ser um número.");const n=parseInt(o,10);if(n<=7189||n>599999)a.h("RA não encontrado.");else{a.g(!1),a.h("Confirmando...");try{await d.b(o),window.location.href="ok/"}catch(o){a.h("Prazo encerrado")}finally{a.g(!0)}}}a.d();