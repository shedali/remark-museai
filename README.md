# Remark Plugin MuseAI

The idea of this is to take links to local video files of a given directory, post them to muse.ai and replace the link with resulting CDN url

## Motivation

- motivated by personal need
- I want a direct mapping between my local taxonomy and posts so as to reduce re-work required for publishing
- video assets are becoming increasingly important for sharing of networked ideas

## Performance

- asynchronicity introduced which will potentially slow down certain builds
- validation to ensure files are not too large, although muse.ai is fixed price

## Alternatives

- manual upload and link in markdown document

## Utility

- to use, the user must set environment variable API key for muse.ai
- other video services?
