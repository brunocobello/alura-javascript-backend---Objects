const data = {
    tenants: [
        {
            tnnt: '531',
            descricao_tnnt: 'PF',
            contacts: [
                {
                    ctto: '811',
                    descricao_ctto: 'Itaucard'
                },
                {
                    ctto: '8cd',
                    descricao_ctto: 'Credicard'
                },
                {
                    ctto: 'cc123',
                    descricao_ctto: 'Conta Corrente'
                }
            ]
        },
        {
            tnnt: '618',
            descricao_tnnt: 'PJ',
            contacts: [
                {
                    ctto: 'cc123',
                    descricao_ctto: 'Conta Corrente'
                }
            ]
        }
    ]
}

// exibindo o objeto data
// console.log(data.tenants);

// dados mockados da sessao
tnnt = '531';
ctto = '8d';

const verifyTenant = data.tenants.filter(tenants => tenants.tnnt === tnnt);
const verifyContact = verifyTenant.length > 0 ? verifyTenant[0].contacts.filter(contacts => contacts.ctto === ctto) : []

if( verifyTenant.length === 1 && verifyContact.length === 1){    
    console.log(`Encontrado - ${verifyTenant[0].descricao_tnnt} - ${verifyContact[0].descricao_ctto}`);
} else {
    console.log('Não Encontrado');
}
    


