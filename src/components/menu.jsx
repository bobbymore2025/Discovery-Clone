import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Stack,

  } from '@chakra-ui/react'
import {HamburgerIcon ,IconButton} from "@chakra-ui/icons"
export const Options=()=>{
return (
<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} >
    <Stack direction='row'>
    <Button  borderRadius="none" colorScheme='gray.700' variant='solid'>
    Kids
  </Button>
   <Button borderRadius="none" colorScheme='gray.200' variant='outline'>
   ALL
  </Button>
</Stack>
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} >
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} >
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} >
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
);
}