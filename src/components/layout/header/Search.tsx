'use client';

import { SearchIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { type FormEvent, useState } from 'react';
import { Button } from '../../ui/common/Button';
import { Input } from '../../ui/common/Input';

const Search = () => {
  const translate = useTranslations('layout.header.search');
  const router = useRouter();

  const [searchValue, setSearchValue] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue.trim()) {
      router.push(`/streams?searchValue=${searchValue}`);
    } else {
      router.push('/streams');
    }
  };

  return (
    <div className="ml-auto hidden lg:block">
      <form className="relative flex items-center" onSubmit={onSubmit}>
        <Input
          placeholder={translate('placeholder')}
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          className="w-full rounded-full pl-4 pr-10 lg:w-[400px]"
        />
        <Button type="submit" className="absolute right-0 h-9">
          <SearchIcon className="absolute size-[18px]" />
        </Button>
      </form>
    </div>
  );
};

export default Search;
