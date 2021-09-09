import { useEffect, useState } from 'react'
import { getTagsFromFirestore, saveTagsOnFirestore } from '../services/firebase'

export const useTags = (user, trackId, title) => {
  const [trackTags, setTrackTags] = useState([])

  useEffect(() => {
    ;(async () => {
      await getTrackTags()
    })()
  }, [])

  const getTrackTags = async () => {
    setTrackTags(await getTagsFromFirestore(user, trackId))
  }

  const deleteTrackTags = async (tag) => {
    saveTagsOnFirestore(
      user,
      trackId,
      title,
      trackTags.filter((tagFilter) => {
        if (tagFilter !== tag) return tagFilter
      })
    )
    setTrackTags(await getTagsFromFirestore(user, trackId))
  }

  return { trackTags, setTrackTags, getTrackTags, deleteTrackTags }
}
