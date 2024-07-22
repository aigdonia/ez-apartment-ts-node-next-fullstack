# Ez Apartment

> This is a fullstack "Listings" app provided as part of recruitment process I participated in.

### Please read!
this is a project submitted for recruitment purpose.

## Functional Requirements
- [x] Create apartment listing.
- [x] List apartments / filter by type, location, number of bedrooms, price range.
- [x] View apartment details.
- [x] Implement NextJS application for frontend.
- [ ] Implement React Native application for mobile.

## Non-Functional Requirements
- [ ] Dockerize the app.

## Design Decisions
- Database: MongoDB, requirements stated that data nature can be handled by MongoDB.
- Web Server: Express, with TypeScript, I used Awilix for dependency injection, Mongoose for database access.
- Frontend: NextJS, with TypeScript, I used React Query for state management and data fetching.
- Mobile: React Native

## Implementation Decisions
- I used Monorepo structure to manage code for both frontend and backend. I used `pnpm` and `turborepo`.

## Screenshots
![listing apartments](https://github.com/aigdonia/ez-apartment-ts-node-next-fullstack/blob/main/ez-listing-filter.jpeg?raw=true)

![Single Apartment](https://github.com/aigdonia/ez-apartment-ts-node-next-fullstack/blob/main/ez-listing-single.jpeg?raw=true)