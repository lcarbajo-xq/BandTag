import {
  Flex,
  Editable,
  useEditableControls,
  ButtonGroup,
  IconButton,
  EditablePreview,
  EditableInput,
  Input,
  Text,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

import { AddIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { getTagsFromFirestore, saveTagsOnFirestore } from '../services/firebase'
import {
  AutoComplete,
  AutoCompleteCreatable,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag
} from '@choc-ui/chakra-autocomplete'

const initialTagValue = 'New Tag'

// const EditableControls = () => {
//   const {
//     isEditing,
//     getSubmitButtonProps,
//     getCancelButtonProps,
//     getEditButtonProps
//   } = useEditableControls()

//   return isEditing ? (
//     <ButtonGroup justifyContent='center' size='xs'>
//       <IconButton
//         colorScheme='whatsapp'
//         bg='#fff'
//         icon={<CheckIcon />}
//         {...getSubmitButtonProps()}
//       />
//       <IconButton bg='#fff' icon={<CloseIcon />} {...getCancelButtonProps()} />
//     </ButtonGroup>
//   ) : (
//     <Flex
//       as='button'
//       borderRadius='29px'
//       justifyContent='center'
//       colorScheme='blue'
//     >
//       <IconButton
//         bg='gray.500'
//         size='xs'
//         icon={<AddIcon />}
//         {...getEditButtonProps()}
//       />
//     </Flex>
//   )
// }

// export const NewTag = ({ id, title, prevTags, setTags, user }) => {
//   const [value, setValue] = useState(initialTagValue)

//   const handleNewTag = (value) => {
//     setValue(initialTagValue)
//     const newTag = '#' + `${value}`
//     setTags(() => {
//       const tagsUpdated = [...prevTags, newTag]
//       saveTagsOnFirestore(user, id, title, tagsUpdated)
//       return tagsUpdated
//     })
//   }

//   const handleChange = (value) => {
//     setValue(value)
//   }

//   return (
//     <Editable
//       borderRadius='10px'
//       as='button'
//       onSubmit={handleNewTag}
//       leftIcon={<AddIcon size='xs' />}
//       display='flex'
//       direction='row'
//       alignItems='center'
//       textAlign='center'
//       defaultValue={initialTagValue}
//       value={value}
//       onChange={handleChange}
//       fontSize='xs'
//       isPreviewFocusable={false}
//     >
//       <EditableControls />
//       <EditablePreview />
//       <EditableInput />
//     </Editable>

export const NewTag = ({ setTags, ctags }) => {
  const [newTag, setNewTag] = useState('')

  const handleCreateItem = (tags) => {
    console.log(tags)
  }

  return (
    <AutoComplete creatable rollNavigation multiple>
      <AutoCompleteInput variant='filled' placeholder='Add Tag' pl='10'>
        {({ tags }) =>
          tags.map((tag) => setNewTag((prev) => [...prev, tag.label]))
        }
      </AutoCompleteInput>

      <AutoCompleteList>
        {ctags.map((tag) => (
          <AutoCompleteItem
            key={tag}
            value={tag}
            textTransform='capitalize'
            align='center'
          >
            <Text ml='4'>{tag}</Text>
          </AutoCompleteItem>
        ))}
        <AutoCompleteCreatable />
      </AutoCompleteList>
    </AutoComplete>
  )
}
