# Context File

- I ran out of time to add the movie and tv categories, eg. Drama, Action, Adventure etc. With more time, I could have completed it.

## What is this file for?

- Use [dayjs](https://day.js.org/docs/en/installation/typescript) - To format the dates. In bundlephobia, it is much faster with `3ms` download time than the more famous LuxonJS. See here https://bundlephobia.com/package/dayjs@1.11.9

## What are we looking for?

You are welcome to keep it brief but please jot down a few notes on:

- Why you have chosen a library?
- What other libraries you have considered (if any)

The headings below are just there to guide you, feel free to remove them or add
new ones.

---

### Approach to solution

- I moved each of the media type into their own component so that it can manage it's own state like the movies and tv shows that has genres included. I created also a type and enum namespace so that I will not use magic string when doing comparison.

### Testing

- Not enough time.
