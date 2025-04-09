export const esES = {
  languages: [
    { label: 'Portugués', lang: 'pt-BR' },
    { label: 'Inglés', lang: 'en-US' },
    { label: 'Español', lang: 'es-ES' },
  ],
  language: 'Idioma',
  menu: {
    dashboard: 'Panel',
    income: 'Ingreso',
    expense: 'Gastos',
    logout: 'Para Salir',
  },
  auth: {
    login: {
      title: "Bienvenido de nuevo",
      phrase: "Por favor ingresa tus datos para iniciar sesión",
      form: {
        email: {
          label: "Dirección de correo electrónico",
          placeholder: "john@example.com",
        },
        password: {
          label: "Contraseña",
          placeholder: "Mínimo 8 caracteres",
        },
        button: "CONECTAR",
      },
      link: {
        text: "¿No tienes una cuenta?",
        actionText: "Inscribirse",
      },
      card: {
        track: {
          title: "Realice un seguimiento de sus ingresos y gastos",
          number: "430.000",
        },
      },
    },
    register: {
      title: "Crea una cuenta",
      phrase: "Únase a nosotros hoy ingresando sus datos a continuación",
      form: {
        fullname: {
          label: "Nombre completo",
          placeholder: "John",
        },
        email: {
          label: "Dirección de correo electrónico",
          placeholder: "john@exemplo.com",
        },
        password: {
          label: "Contraseña",
          placeholder: "Mínimo 8 caracteres",
        },
        button: "SUSCRIBIR",
      },
      link: {
        text: "¿Ya tienes una cuenta?",
        actionText: "Para entrar",
      },
    },
  },
  dashboard: {
    home: {
      button: 'Ver Todo',
      amount: 'Valor',
      cards: {
        balance: 'Saldo Total',
        income: 'Ingresos Totales',
        expense: 'Gasto Total',
      },
      transactions: {
        recent: 'Transacciones Recientes',
        graphic: 'Resumen Financiero',
      },
      expanses: {
        title: 'Expansiones',
        graphic: 'Gastos de los últimos 30 días',
      },
      incomes: {
        title: 'Ingreso',
        graphic: 'Últimos 60 días de ingresos',
      },
    },
    income: {
      graphic: {
        title: 'Resumen de ingresos',
        subtitle: 'Realice un seguimiento de sus ganancias a lo largo del tiempo y analice las tendencias de sus ingresos.',
        button: 'Agregar ingresos',
        form: {
          title: 'Agregar ingresos',
          icon: {
            none: 'Icono de selección',
            filled: 'Cambiar icono',
          },
          source: {
            label: 'Fuente de ingresos',
            placeholder: 'Autónomo, Asalariado, etc.',
          },
          amount: 'Valor de ingresos',
          date: 'Fecha',
          button: 'Agregar ingresos',
        },
      },
      transactions: {
        title: 'Fuentes de ingresos',
        delete: {
          title: 'Excluir ingresos',
          text: '¿Está seguro de que desea excluir esto de sus datos de ingresos?',
          button: 'Borrar',
        },
      },
    },
    expense: {
      graphic: {
        amount: 'Valor',
        title: 'Resumen de gastos',
        subtitle: 'Realice un seguimiento de sus tendencias de gasto a lo largo del tiempo y obtenga información sobre adónde va su dinero.',
        button: 'Agregar gastos',
        form: {
          title: 'Agregar gastos',
          category: {
            label: 'Categoría',
            placeholder: 'Alquiler, comestibles, etc.',
          },
          amount: 'Cantidad',
          date: 'Fecha',
          button: 'Agregar gastos',
        },
      },
      transactions: {
        title: 'Todos los gastos',
        delete: {
          title: 'Eliminar Gasto',
          text: '¿Está seguro de que desea eliminar esto de los detalles de sus gastos?',
        },
      },
    },
  },
};
