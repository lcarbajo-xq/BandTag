import { GridItem } from '@chakra-ui/react'
import { getTopTracks } from '../../src/services/spotify'

export default async (_, res) => {
  const responseTop = await getTopTracks()
  const { items } = await responseTop.json()

  const severalTopTracks = items.slice(0, 20).map((track) => ({
    id: track.id,
    href: track.href,
    track_url: track.external_urls?.spotify,
    album: track.album.name,
    albumImageURL: track.album.images[0].url,
    popularity: track.popularity,
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    title: track.name
  }))

  return res.status(200).json({ severalTopTracks })
}
