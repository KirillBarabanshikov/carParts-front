import { Button, ButtonProps, Icon, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useMobile } from '@/shared/hooks';

interface IResponsiveButtonProps extends ButtonProps {}

export const ResponsiveButton: FC<IResponsiveButtonProps> = ({ ...props }) => {
  const { isMobile } = useMobile();

  if (isMobile) {
    return (
      <IconButton
        aria-label={'button'}
        colorScheme={'orange'}
        icon={<Icon as={BiPlus} boxSize={'20px'} />}
        {...props}
      />
    );
  }

  return (
    <Button colorScheme={'orange'} leftIcon={<Icon as={BiPlus} boxSize={'20px'} />} {...props}>
      Добавить
    </Button>
  );
};
