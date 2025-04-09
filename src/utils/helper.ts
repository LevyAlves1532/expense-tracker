import moment from "moment";
import { ChartDataTypes, ResumTransactionExpenseTypes, TransactionsTypes } from "../types";

export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (name: string): string => {
    if (!name) return "";

    const words = name.split(' ');
    let initials = '';

    for (let i = 0;i < Math.min(words.length, 2); i++) {
        initials += words[i][0];
    }

    return initials.toUpperCase();
};

export const addThousandsSeparator = (num: number | null = null): string => {
    if (num == null || isNaN(num)) return "";

    const [ integerPart, fractionalPart ] = num.toString().split('.');
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return fractionalPart 
        ? `${formattedInteger}.${fractionalPart}`
        : formattedInteger;
};

export const prepareExpenseBarChartData = (data: TransactionsTypes[] = []): ResumTransactionExpenseTypes[] => {
    const chartData = data.map((item) => ({
        category: item?.category,
        amount: item?.amount,
    }));

    return chartData;
}

export const prepareIncomeBarChartData = (data: TransactionsTypes[] = []): ChartDataTypes[] => {
    const sortedData = [...data].sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const chartData = sortedData.map((item) => ({
        month: moment(item?.date).format('Do MMM'),
        amount: item?.amount,
        source: item.source,
    }));

    return chartData;
}

export const prepareExpenseLineChartData = (data: TransactionsTypes[] = []): ChartDataTypes[] => {
    const sortedData = [...data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const chartData = sortedData.map((item) => ({
        month: moment(item?.date).format('Do MMM'),
        amount: item?.amount,
        category: item?.category,
    }));

    return chartData;
}
