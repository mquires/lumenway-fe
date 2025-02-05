'use client';

import { Separator } from '@/components/ui/common/Separator';
import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from '@hello-pangea/dnd';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { SocialLink } from './social-link.interface';
import SocialLinkItem from './SocialLinkItem';

const SocialLinksList = () => {
  const translate = useTranslations('dashboard.settings.profile.socialLinks');

  // const {data, refetch} = useFindSocialLinksQuery();
  //TODO: Add mutation

  const items: SocialLink[] = [
    {
      id: '1',
      title: 'test',
      url: 'https://test.com',
    },
    {
      id: '2',
      title: 'tes2t',
      url: 'https://test.com',
    }, //TODO: Remove mockdata
  ];

  const [socialLinks, setSocialLinks] = useState(items);

  // useEffect(() => {
  //   setSocialLinks(items);
  // }, [items]);

  // setSocialLinks(items);

  const onDragEnd = (result: DropResult) => {
    // if (!result.destination) return;
    // const items = Array.from(socialLinks);
    // const [reorderItem] = items.splice(result.source.index, 1);
    // items.slice(result.destination.index, 0, reorderItem);
    // const bulkUpdateData = items.map((socialLink, index) => ({
    //   id: socialLink.id,
    //   position: index,
    // }));
    // setSocialLinks(items);
  };

  //TODO: Add remove mutation

  return socialLinks.length ? (
    <>
      <Separator />
      <div className="p-5">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="socialLinks">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {socialLinks.map((socialLink, index) => (
                  <Draggable
                    key={socialLink.id}
                    draggableId={socialLink.id}
                    index={index} /*isDragDisabled */
                  >
                    {provided => (
                      <SocialLinkItem
                        key={socialLink.id}
                        socialLink={socialLink}
                        provided={provided}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  ) : null;
};

export default SocialLinksList;
