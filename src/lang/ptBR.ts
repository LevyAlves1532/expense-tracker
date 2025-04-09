export const ptBR = {
  languages: [
    { label: 'Português', lang: 'pt-BR' },
    { label: 'Inglês', lang: 'en-US' },
    { label: 'Espanhol', lang: 'es-ES' },
  ],
  language: 'Idioma',
  menu: {
    dashboard: 'Painel',
    income: 'Renda',
    expense: 'Despesa',
    logout: 'Sair',
  },
  auth: {
    login: {
      title: "Bem vindo de volta",
      phrase: "Por favor, insira seus dados para efetuar login",
      form: {
        email: {
          label: "Endereço de email",
          placeholder: "john@example.com",
        },
        password: {
          label: "Senha",
          placeholder: "Mínimo 8 caracteres",
        },
        button: "CONECTE-SE",
      },
      link: {
        text: "Não tem uma conta?",
        actionText: "Inscreva-se",
      },
      card: {
        track: {
          title: "Acompanhe sua renda e despesas",
          number: "430.000",
        },
      },
    },
    register: {
      title: "Criar uma conta",
      phrase: "Junte-se a nós hoje, inserindo seus dados abaixo",
      form: {
        fullname: {
          label: "Nome completo",
          placeholder: "John",
        },
        email: {
          label: "Endereço de email",
          placeholder: "john@exemplo.com",
        },
        password: {
          label: "Senha",
          placeholder: "Mínimo 8 caracteres",
        },
        button: "INSCREVER-SE",
      },
      link: {
        text: "Já tem uma conta?",
        actionText: "Entrar",
      },
    },
  },
  dashboard: {
    home: {
      button: 'Ver Tudo',
      amount: 'Valor',
      cards: {
        balance: 'Saldo total',
        income: 'Renda Total',
        expense: 'Despesa total',
      },
      transactions: {
        recent: 'Transações recentes',
        graphic: 'Visão geral financeira',
      },
      expanses: {
        title: 'Expansões',
        graphic: 'Despesas dos últimos 30 dias',
      },
      incomes: {
        title: 'Renda',
        graphic: 'Últimos 60 dias de renda',
      },
    },
    income: {
      graphic: {
        title: 'Visão geral da renda',
        subtitle: 'Acompanhe seus ganhos ao longo do tempo e analise suas tendências de renda.',
        button: 'Adicionar Renda',
        form: {
          title: 'Adicionar renda',
          icon: {
            none: 'Ícone de seleção',
            filled: 'Alterar ícone',
          },
          source: {
            label: 'Fonte de renda',
            placeholder: 'Freelance, Assalariado, etc.',
          },
          amount: 'Valor da renda',
          date: 'Data',
          button: 'Adicionar Renda',
        },
      },
      transactions: {
        title: 'Fontes de renda',
        delete: {
          title: 'Excluir Renda',
          text: 'Tem certeza de que deseja excluir isso dos detalhes de renda?',
          button: 'Excluir',
        },
      },
    },
    expense: {
      graphic: {
        amount: 'Valor',
        title: 'Visão geral de despesas',
        subtitle: 'Monitore suas tendências de gastos ao longo do tempo e obtenha insights sobre para onde seu dinheiro vai.',
        button: 'Adicionar Despesa',
        form: {
          title: 'Adicionar Despesa',
          category: {
            label: 'Categoria',
            placeholder: 'Aluguel, mantimentos, etc.',
          },
          amount: 'Quantia',
          date: 'Data',
          button: 'Adicionar Despesa',
        },
      },
      transactions: {
        title: 'Todas as despesas',
        delete: {
          title: 'Excluir Despesa',
          text: 'Tem certeza de que deseja excluir isso dos detalhes de despesas?',
        },
      },
    },
  },
};
