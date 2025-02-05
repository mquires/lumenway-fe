import { useTranslations } from 'next-intl';

export const useFormatDate = () => {
  const translate = useTranslations('utils.formatDate');

  return (dateString: string | Date, includeTime: boolean = false) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const months = [
      translate('months.january'),
      translate('months.february'),
      translate('months.march'),
      translate('months.april'),
      translate('months.may'),
      translate('months.june'),
      translate('months.july'),
      translate('months.august'),
      translate('months.september'),
      translate('months.october'),
      translate('months.november'),
      translate('months.december'),
    ];

    let formattedDate = `${day} ${months[monthIndex]} ${year}`;

    if (includeTime) {
      formattedDate += `, ${hours}:${minutes}`;
    }

    return formattedDate;
  };
};
