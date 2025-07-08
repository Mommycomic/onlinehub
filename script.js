const bookData = [
            {
                id: 'mama-bear-guide',
                title: "The Mama Bear's Guide to Everything",
                rating: 4.8,
                tags: ["Parenting", "Humor", "Advice", "Life Skills"],
                imageUrl: "mommycomic-app/Src/Data/Image/1/IMG_20250624_110111_387.jpg",
                link: "mommycomic-app/Src/Page/Comic1.html" // Link to the specific page
            },
            {
                id: 'supermom-adventures',
                title: "Adventures of Supermom: The Early Years",
                rating: 4.5,
                tags: ["Comic", "Action", "Family", "Superhero"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Supermom+Vol1",
                link: "supermom-adventures.html" // Link to the specific page
            },
            {
                id: 'tiny-toes-dreams',
                title: "Tiny Toes, Big Dreams: A Child's Journey",
                rating: 4.9,
                tags: ["Inspiration", "Journey", "Growth", "Children's Book"],
                imageUrl: "https://placehold.co/300x200/6EE7B7/1a1a1a?text=Tiny+Toes",
                link: "tiny-toes-dreams.html"
            },
            {
                id: 'diaper-diaries',
                title: "The Diaper Diaries: A Hilarious Account",
                rating: 4.2,
                tags: ["Humor", "Real-life", "Challenges", "Parenthood"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Diaper+Diaries",
                link: "diaper-diaries.html"
            },
            {
                id: 'lullabies-lessons',
                title: "Lullabies and Lessons: Stories for Little Ones",
                rating: 4.7,
                tags: ["Education", "Love", "Stories", "Bedtime"],
                imageUrl: "https://placehold.co/300x200/6EE7B7/1a1a1a?text=Lullabies",
                link: "lullabies-lessons.html"
            },
            {
                id: 'moms-magic-potion',
                title: "Mom's Magic Potion: An Enchanted Tale",
                rating: 4.6,
                tags: ["Fantasy", "Children", "Adventure", "Magic"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Magic+Potion",
                link: "moms-magic-potion.html"
            },
            {
                id: 'navigating-motherhood',
                title: "Navigating Motherhood: A Guide to Wellness",
                rating: 4.3,
                tags: ["Guide", "Support", "Wellness", "Self-care"],
                imageUrl: "https://placehold.co/300x200/6EE7B7/1a1a1a?text=Motherhood",
                link: "navigating-motherhood.html"
            },
            {
                id: 'sleep-deprived-heroine',
                title: "The Sleep-Deprived Heroine: A Comedy",
                rating: 4.0,
                tags: ["Relatable", "Comedy", "Daily Life", "Parenting Humor"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Heroine",
                link: "sleep-deprived-heroine.html"
            },
            {
                id: 'abcs-awesome-parenting',
                title: "The ABCs of Awesome Parenting",
                rating: 4.7,
                tags: ["Education", "Parenting", "Guide", "Kids"],
                imageUrl: "https://placehold.co/300x200/6EE7B7/1a1a1a?text=ABCs",
                link: "abcs-awesome-parenting.html"
            },
            {
                id: 'babysitting-graphic-novel',
                title: "Adventures in Babysitting: The Graphic Novel",
                rating: 4.4,
                tags: ["Comic", "Adventure", "Humor", "Teen"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Babysitting",
                link: "babysitting-graphic-novel.html"
            },
            {
                id: 'little-explorer-handbook',
                title: "The Little Explorer's Handbook",
                rating: 4.9,
                tags: ["Children", "Nature", "Education", "Activity"],
                imageUrl: "https://placehold.co/300x200/6EE7B7/1a1a1a?text=Explorer",
                link: "little-explorer-handbook.html"
            },
            {
                id: 'parenting-hacks',
                title: "Parenting Hacks: Survival Guide",
                rating: 4.1,
                tags: ["Advice", "Tips", "Parenting", "Practical"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Hacks",
                link: "parenting-hacks.html"
            },
            {
                id: 'brave-kids-stories',
                title: "Bedtime Stories for Brave Kids",
                rating: 4.8,
                tags: ["Stories", "Children", "Courage", "Fantasy"],
                imageUrl: "https://placehold.co/300x200/6EE7B7/1a1a1a?text=Brave+Kids",
                link: "brave-kids-stories.html"
            },
            {
                id: 'juggling-mom-edition',
                title: "The Art of Juggling: Mom Edition",
                rating: 4.5,
                tags: ["Life Skills", "Balance", "Parenting", "Productivity"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Juggling",
                link: "juggling-mom-edition.html"
            },
            {
                id: 'my-first-science-book',
                title: "My First Science Book",
                rating: 4.7,
                tags: ["Education", "Science", "Kids", "Learning"],
                imageUrl: "https://placehold.co/300x200/6EE7B7/1a1a1a?text=Science+Book",
                link: "my-first-science-book.html"
            },
            {
                id: 'super-nanny-chronicles',
                title: "Super Nanny Chronicles",
                rating: 4.3,
                tags: ["Comic", "Humor", "Family", "Advice"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Nanny+Chronicles",
                link: "super-nanny-chronicles.html"
            },
            {
                id: 'cooking-with-kids',
                title: "Cooking with Kids: Simple Recipes",
                rating: 4.6,
                tags: ["Cooking", "Kids", "Recipes", "Family Activity"],
                imageUrl: "https://placehold.co/300x200/6EE7B7/1a1a1a?text=Cooking+Kids",
                link: "cooking-with-kids.html"
            },
            {
                id: 'ultimate-playdate-planner',
                title: "The Ultimate Playdate Planner",
                rating: 4.2,
                tags: ["Planning", "Kids", "Activities", "Social"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Playdate",
                link: "ultimate-playdate-planner.html"
            },
            {
                id: 'growing-up-gratefully',
                title: "Growing Up Gratefully",
                rating: 4.9,
                tags: ["Inspiration", "Growth", "Values", "Children"],
                imageUrl: "https://placehold.co/300x200/6EE7B7/1a1a1a?text=Gratefully",
                link: "growing-up-gratefully.html"
            },
            {
                id: 'zen-mom',
                title: "Zen Mom: Mindfulness for Mothers",
                rating: 4.8,
                tags: ["Wellness", "Mindfulness", "Self-care", "Parenting"],
                imageUrl: "https://placehold.co/300x200/C084FC/1a1a1a?text=Zen+Mom",
                link: "zen-mom.html"
            }
        ];

        const bookGrid = document.getElementById('bookGrid');
        const searchInput = document.getElementById('searchInput');

        function createBookCard(book) {
            const card = document.createElement('a'); // Changed to anchor tag
            card.classList.add('book-card');
            card.href = book.link; // Set the href for redirection using the 'link' property
            card.setAttribute('data-id', book.id); // Add data-id for consistency

            const cardImage = document.createElement('div');
            cardImage.classList.add('card-image');
            const img = document.createElement('img');
            img.src = book.imageUrl;
            img.alt = book.title;
            cardImage.appendChild(img);

            const cardRating = document.createElement('div');
            cardRating.classList.add('card-rating');
            cardRating.textContent = book.rating.toFixed(1);

            const cardTitle = document.createElement('h2');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = book.title;

            const cardTags = document.createElement('div');
            cardTags.classList.add('card-tags');
            book.tags.forEach(tagText => {
                const tag = document.createElement('span');
                tag.classList.add('tag');
                tag.textContent = tagText;
                cardTags.appendChild(tag);
            });

            card.appendChild(cardImage);
            card.appendChild(cardRating);
            card.appendChild(cardTitle);
            card.appendChild(cardTags);

            // Add 3D click animation
            card.addEventListener('click', function(event) {
                // Allow default anchor behavior to proceed, but add animation for visual feedback
                card.classList.add('clicked');
                card.addEventListener('animationend', () => {
                    card.classList.remove('clicked');
                }, { once: true });
            });

            return card;
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                } else {
                    entry.target.classList.remove('visible');
                    entry.target.classList.add('hidden');
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the item is visible
            rootMargin: '0px 0px -50px 0px' // Adjust to trigger before it's fully off screen
        });

        function displayBooks(books) {
            bookGrid.innerHTML = ''; // Clear existing cards
            if (books.length === 0) {
                bookGrid.innerHTML = '<p style="text-align: center; width: 100%;">No results found.</p>';
            } else {
                books.forEach(book => {
                    const card = createBookCard(book);
                    bookGrid.appendChild(card);
                    observer.observe(card); // Observe each new card
                });
            }
        }

        function filterBooks() {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredBooks = bookData.filter(book =>
                book.title.toLowerCase().includes(searchTerm) ||
                book.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
            displayBooks(filteredBooks);
        }

        // Initial display of all books
        displayBooks(bookData);

        // Event listener for search input
        searchInput.addEventListener('input', filterBooks);