export const enUS = {
  languages: [
    { label: 'Portuguese', lang: 'pt-BR' },
    { label: 'English', lang: 'en-US' },
    { label: 'Spanish', lang: 'es-ES' },
  ],
  language: 'Language',
  menu: {
    dashboard: 'Dashboard',
    income: 'Income',
    expense: 'Expense',
    logout: 'Logout',
  },
  auth: {
    login: {
      title: "Welcome Back",
      phrase: "Please enter your details to log in",
      form: {
        email: {
          label: "Email Address",
          placeholder: "john@example.com",
        },
        password: {
          label: "Password",
          placeholder: "Min 8 Characters",
        },
        button: "LOGIN",
      },
      link: {
        text: "Don't have an account?",
        actionText: "SignUp",
      },
      card: {
        track: {
          title: "Track Your Income & Expenses",
          number: "430,000",
        },
      },
    },
    register: {
      title: "Create an Account",
      phrase: "Join us today by entering your details below",
      form: {
        fullname: {
          label: "Full Name",
          placeholder: "John",
        },
        email: {
          label: "Email Address",
          placeholder: "john@example.com",
        },
        password: {
          label: "Password",
          placeholder: "Min 8 Characters",
        },
        button: "SIGN UP",
      },
      link: {
        text: "Already have an account?",
        actionText: "Login",
      },
    },
  },
  dashboard: {
    home: {
      button: 'See All',
      amount: 'Amount',
      cards: {
        balance: 'Total Balance',
        income: 'Total Income',
        expense: 'Total Expense',
      },
      transactions: {
        recent: 'Recent Transactions',
        graphic: 'Financial Overview',
      },
      expanses: {
        title: 'Expanses',
        graphic: 'Last 30 Days Expenses',
      },
      incomes: {
        title: 'Income',
        graphic: 'Last 60 Days Income',
      },
    },
    income: {
      graphic: {
        title: 'Income Overview',
        subtitle: 'Track your earnings over time and analyze your income trends.',
        button: 'Add Income',
        form: {
          title: 'Add Inome',
          icon: {
            none: 'Pick Icon',
            filled: 'Change Icon',
          },
          source: {
            label: 'Income Source',
            placeholder: 'Freelance, Salary, etc.',
          },
          amount: 'Income Amount',
          date: 'Date',
          button: 'Add Income',
        },
      },
      transactions: {
        title: 'Income Sources',
        delete: {
          title: 'Delete Income',
          text: 'Are you sure you want to delete this in income detail?',
          button: 'Delete',
        },
      },
    },
    expense: {
      graphic: {
        amount: 'Amount',
        title: 'Expense Overview',
        subtitle: 'Track your spending trends over time and again insights into where your money goes.',
        button: 'Add Expense',
        form: {
          title: 'Add Expense',
          category: {
            label: 'Category',
            placeholder: 'Rent, Groceries, etc',
          },
          amount: 'Amount',
          date: 'Date',
          button: 'Add Expense',
        },
      },
      transactions: {
        title: 'All Expenses',
        delete: {
          title: 'Delete Expense',
          text: 'Are you sure you want to delete this in expense detail?',
        },
      },
    },
  },
};
