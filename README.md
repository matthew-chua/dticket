# D'Ticket

## Abstract

Counterfeit tickets are rampant, and many ticket scams exist. Reportedly, around 12% of the ticket transactions end up as scams. We believe that this can be solved with the blockchain, and we propose integrating the ticket industry into the Web3 space.

We believe the integration can be centered around a few key features of the blockchain. The tickets will be NFTs built on ERC721 contracts. This provides users with (i) integrity and authenticity through token validation, (ii) safe and secure transactions through contract-facilitated transactions, and (iii) a marketplace to purchase original and resale tickets.

## Introduction

### Problem Statement

There are two main gaps in the ticketing industry - lack of a marketplace/community for event organizers to engage with event-goers, and lack of a foolproof solution for managing counterfeit and resale tickets. We believe that both these gaps can be solved with the blockchain, and we propose integrating the ticket industry into the Web3 space. In doing so, we plan on creating a solution which provides both **community** and **integrity** to the ticketing industry.

### Project Description

Our project aims on targeting the following pain points we have observed in the market.

| Pain Point | Description of Pain Point | Solutions |
| --- | --- | --- |
| Lack of Community | Fan engagement has traditionally been separated from ticketing, whereby fan engagement occurs through other means like social media. Additionally, solutions which typically focus on security & integrity tend to focus on only that aspect, while neglecting the marketplace or engagement aspects. | (1) Primary Ticket Marketplace (2) Fan Engagement Channels, including NFTs |
| Lack of Integrity | There is a lack of a foolproof way to validate tickets, leading to counterfeit tickets and reselling scams. In fact, CNBC reported in 2018 that a total of 12% of ticket purchasers are victims of ticket scams. There is also a lack of a secondary market for the reselling of tickets, and the lack of customer trust deters people from transacting in any existing secondary market. | (1) Secondary Ticket Marketplace, where we provide a secure, safe and trustless way to trade and transact through the use of smart contracts (2) Counterfeit prevention with transparency and authenticity through token validation logic |

## Main Idea

D’Ticket’s functionality can be broken down into 4 main parts.

1. Minting is where event organizers come to us and list their tickets for sale. Users can then mint these tickets as NFTs from our site.
2. These tickets can then be resold on our marketplace, where we can guarantee authenticity.
3. We also have a separate authenticator tool, which users can use to verify tickets that they purchase from elsewhere. This is something that current ticketers do not support. 
4. Since these NFTs will remain in users wallets even after the event, artists can actually track their most loyal fans, and reward them accordingly.

## Product Demo

https://user-images.githubusercontent.com/8297863/205173058-1d43d630-8b1c-4a48-b834-d5db3c1f094d.mp4

## Competitor Analysis

| Competitor | Main Selling Points | Downsides | How we are Better |
| --- | --- | --- | --- |
| GUTs | Prevents counterfeiting and resale of tickets | (1) The GUTs app functions like a ticket wallet without a marketplace/community. (2) User interface is confusing (see customer conversations below) | We combine both the security features of GUTs together with the marketplace features of TicketMaster, and further improve the user experience with: (1) Regulated ticket resale (2) Fan engagement features |
| TicketMaster | (1) Primary marketplace which allows organizers to sell tickets to event-goers (2) Moving QR for ticket authenticity | (1) Lack of fan engagement avenues (2) Does not regulate ticket resale |  |

## Approach

### User Flow

1. Event organizers approach us to sell tickets for a particular event.
2. We prepare the NFT contract, allocating the number of tickets specified by the event organizer. Users will have the option to add the ticket to their Apple Wallet as well.
3. Users can come to our site and mint tickets.
4. Once tickets are minted, users can choose to resell their tickets on our marketplace, or transfer ownership by simply transferring their NFT to another wallet address. Our site will support this transfer function as well, but experienced users can interact with the contract and make transfers themselves as well.
5. During the event, tickets can be scanned and expended on the user’s Apple Wallet.

### Features

#### 1. Mint

When tickets are first released, users can “mint” their tickets directly from us. This can either be done on a first come first served basis, or a fairer raffle system. Refer to the Technical Aspects for the different ways event organizers can sell their tickets on our platform.

#### 2. Marketplace (both primary & secondary marketplaces)

We will provide a marketplace that allows event organizers / people to sell/resell their tickets, with the guarantee that the tickets they are purchasing are authentic.

Transactions can be governed by smart contracts, similar to NFT listings on OpenSea and other marketplaces. 

#### 3. Authenticator

Given a contract address and a tokenID, our site will query our minted contracts to verify the authenticity of the ticket. This allows people to purchase tickets off our platform, with the same peace of mind. 

#### 4. Increased Fan Engagement

Since the NFTs will not “expire” from users’ wallets, they can be kept as souvenirs, akin to merchandise. This will also provide an avenue for artists to track who their most loyal fans are, and reward them.

## Technical Aspects

### Tickets

Tickets are ERC-721 NFTs.

We do not decide how many tickets will be available for the general public, the ticket price, or the timing. These are directly controlled by the event organizer.

Additionally, we provide event organizer a few options as to how they would like to sell their tickets:

1. First come first serve
2. Auction
3. Dutch auction
4. Raffle

Since each ticket is a unique Non-Fungible Token, tickets can be marked as expended in our smart contract once the user scans it at the door, preventing multiple entries per ticket.

## Non-Technical Aspects

### Business Model

We will earn a cut of the ticket price (main source of revenue) from both the Mint (initial sale) and the Marketplace (resale tickets).

Various factors decide the fee percentage, such as the price of the venue, its percentage, popularity, etc.

### Go To Market Strategy

#### 1. Onboarding Event Organizers

For organizers who currently sell NFT tickets (pitch to these organizers first because we do not need to overcome the “crypto barrier”):

- Our main USP compared to other NFT ticketing platforms is that we have a **marketplace which allows customers to browse events and buy tickets**, instead of just being a platform that conducts 1-to-1 sales to customers. As such, selling tickets on our platform provides organizers **access to our entire community and network**. Essentially, our platform provides free marketing for event organizers.

For organizers who currently do not sell NFT tickets:

- Pitch the **increased fan engagement** to event organizers and their respective artists, convincing them to shift their business to us.
- Prevents scalping, leading to increased **customer trust**
- Increased **event security** due to counterfeit prevention

#### 2. Onboarding Customers

Once we secure a few big artists and gain traction in the space, customers will start expecting big events to be available on our platform. Event organizers will then also be incentivized to list on our platform to capture our customer base, kickstarting the flywheel.

#### 3. UX

We plan to simplify our UI and UX as much as possible to streamline the experience for non-crypto native users as well. 

This can be done through the usage of tooltips and the lack of Web3 jargon.

## Customer Conversations

| Questions | Ivan Teo, 23 (Web3 Native) | Goh Xue Zhe, 23 (Non Web3 Native) | Diana Tan, 45 (Non Web3 Native) | Chua Kok Wan, 40 (Web3 Native) |
| --- | --- | --- | --- | --- |
| Do you know about the Blockchain? | Yup, I am into cryptocurrencies and DeFi, and have used multiple decentralized applications before. | Yes. I have a rough understanding of how it works and what it does, but I have not used it myself before. | Nope, I have heard of it but I do not know much about how it works or what it does. | Yup, I am currently working in the blockchain space as an engineer. |
| What is your field of expertise? | Fintech | Mobile Development | Operations | Engineering |
| Why have you been resistant towards the blockchain/ What is your greatest pain point with dealing with the blockchain? | - | I have seen the volatility of cryptocurrencies like Bitcoin and do have such a high risk appetite to invest in such technology. | I have no idea what it does, let alone use it. | I personally embrace these decentralized technologies, but I think one of the main reasons others might not is the high barriers to entry. The UX is currently terrible, especially for non technical people, and requires the user to learn a bunch about wallets and stuff, which might be off-putting. |
| Are you a big concert/ movie/ performance goer? | Yes!! I attend around 5-6 a year | Nah, I can watch it on Youtube | Once in awhile, maybe 1 or 2 in the past 2 years | Maybe around 1 or 2 a year? |
| How much do you spend a year on concerts/ movies/ performances? | Each concert is around a hundred dollars, so around 500 - 600 dollars a year? but it is worth | 0, its not worth the money | Maybe about a hundred at most? I wouldn’t spend more | I won’t spend more than 300 dollars. |
| Have you ever had any issues with the current ticketing system? | I think physical tickets are difficult to manage, but the online ones are much more convenient. Sometimes it takes time to redistribute tickets though. | - | Not really, just that having my tickets in different apps is quite difficult to manage at times. | Yea, tickets can be difficult to manage |
| Have you ever been scammed over a ticket? | Yea, some guy sold me a fake Coldplay Concert ticket for 50 bucks. Never again | Nah, but I think if I decide to buy I will just buy straight from the source | Nope, but some of my friends have gotten scammed of some money. | Yea, maybe once a few years ago but it wasn’t much. |
| Have you ever had issues reselling tickets? | Yea, TicketMaster takes a really huge cut out of my transaction, which is rather annoying. I usually try to sell my tickets directly to people, but it is difficult to find buyers that way too. | - | Nah I don’t usually resell. | Sometimes when new plans pop up I do try to resell. But I guess issues like having to meet up is a hassle, and if we do it online there’s always the problem of deciding whether to send them first or them to send you the money first. |
| Do you know about GUTS? | Yea, I have tried them out briefly before. | Nope. | Nope. | Nope. |
| What are your pain points with GUTS? | The UX is pretty bad, I wasn’t really sure how to do certain things like add the ticket to my wallet and there isn’t really a marketplace where I can resell my tickets. | - | - | - |
| What do you think about NFT tickets? | I think they sound promising but no one has really came up with a promising solution for the masses.  | Yea, I guess if that helps to ensure tickets are authentic, that would work! | I don’t know what NFTs are. | That actually sounds like a pretty good use case for NFTs, due to the lack of fungibility, one can easily authenticate tickets this way. |
| What do you think about a decentralized platform to manage, buy and sell your tickets? | That sounds like a great idea if you guys can pull it off! | Sounds interesting, but wouldn’t there be issues like gas fees and having to transact in crypto? | Yea, I think if you guys can ensure that the tickets that are being resold are authentic, that would be a pretty good product. | Yea, that would be great. Everything in one place and I don’t have to worry about the transactions. |
| Would you be willing to swap to decentralized tickets as a main form of concert attendance? | Yea for sure, just make sure the UI/UX is good, I think that’s the most important. | I mean, I don’t even buy tickets but I guess I would if I do. | Um, I think I would have to see how difficult it is to convert. | Yes. If a problem could be solved by technology it should. |

## Conclusion

D’Ticket leads the space of decentralized ticketing, and provides a simple yet secure way to transact tickets. 

Given the nature of our backend architecture, it is easy to implement new and novel pricing mechanisms, such as traditional and dutch auctions, which can be options left to event organizers as well. 

Prices can also be listed in other ERC20 tokens such as USDC to improve UX, and onboarding services that help users seamlessly convert their fiat into crypto can also be integrated, allowing non-crypto native users to be onboarded more easily.

## Division of Labour

1. Product Management - Keane & Marcus
    1. Manage the product roadmap
    2. Competitor analysis
    3. Manage sprints and scrums
2. Frontend - Keane & Marcus
    1. Develop the landing page, marketplace and other frontend components
    2. Integrate the frontend to backend via Web3 integrations
3. Backend - Joel & Matthew
    1. Develop the database
    2. Develop solidity contracts
