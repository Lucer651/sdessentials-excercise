        const projectData = {
            blackhole: {
                title: "Black Hole Visualization",
                subtitle: "Een fascinerende reis door de ruimte-tijd met realistische fysica simulaties",
                image: "/images/black-hole.jpg",
                technologies: ["Blender"],
                description: "Dit project brengt de mysterieuze wereld van zwarte gaten tot leven door middel van geavanceerde 3D visualisatie technieken.",
                features: [
                    { icon: "🌌", text: "Animated Black hole" },
                    { icon: "🎮", text: "Volledige 360° camera controles" },
                    { icon: "🎨", text: "Verschillende viewing modes" },
                    { icon: "🔬", text: "Fully made with shading nodes" }
                ],
                demoUrl: "https://youtu.be/bqPRj6pShus",
                githubUrl: "#"
            },
            portfolio: {
                title: "Portfolio Website",
                subtitle: "Mijn persoonlijke portfolio website",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
                technologies: ["HTML5", "CSS3", "JavaScript"],
                description: "Een elegant portfolio website dat gebruik maakt van de nieuwste design trends en web technologieën. Het glassmorphism effect creëert een moderne, professionele uitstraling terwijl de responsive layout zorgt voor een optimale ervaring op alle apparaten. De site is geoptimaliseerd voor snelheid en toegankelijkheid, met subtiele animaties die de gebruikerservaring verbeteren zonder afleidend te zijn.",
                features: [
                    { icon: "💎", text: "Space like calm design" },
                    { icon: "📱", text: "Hover effects" },
                    { icon: "⚡", text: "Modal/Overlay Menus" },
                    { icon: "✨", text: "Smooth scroll animations" },
                    { icon: "🎯", text: "Cross-browser compatibiliteit" },
                ],
                demoUrl: "https://606193.klas4s25.ictcollege-amersfoort.nl/index.html",
                githubUrl: "https://github.com/roc-ica-2024/l1-pro-1-digitaal-portfolio-Lucer651"
            },
            nonProfit: {
                title: "Non-profit Website",
                subtitle: "Een begin project voor mijn studie",
                image: "https://treesforall.nl/app/uploads/2021/08/hero-background-min-1920x0-c-default.webp",
                technologies: ["HTML5", "CSS3", "JavaScript"],
                description: "Een non-profit website nagemaakt mbv HTML CSS en JS. Met subtiele animaties die de gebruikerservaring verbeteren zonder afleidend te zijn.",
                features: [
                    { icon: "💎", text: "Hover effects" },
                    { icon: "📱", text: "Responsive design" },
                    { icon: "⚡", text: "Interactive buttons" },
                    { icon: "✨", text: "Smooth scroll animaties" },
                    { icon: "🎯", text: "Cross-browser compatibiliteit" },
                ],
                demoUrl: "https://606193.klas4s25.ictcollege-amersfoort.nl/goede_doel",
                githubUrl: "https://github.com/roc-ica-2024/l1-pro-2-het-goede-doel-Lucer651"
            },
            
        };

        function openModal(projectId) {
            const project = projectData[projectId];
            const modal = document.getElementById('modalOverlay');
            
            // Populate modal content
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalSubtitle').textContent = project.subtitle;
            document.getElementById('modalImage').src = project.image;
            document.getElementById('modalDescription').textContent = project.description;
            document.getElementById('modalDemoLink').href = project.demoUrl;
            document.getElementById('modalGithubLink').href = project.githubUrl;
            
            // Populate technologies
            const techContainer = document.getElementById('modalTech');
            techContainer.innerHTML = '';
            project.technologies.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag';
                tag.textContent = tech;
                techContainer.appendChild(tag);
            });
            
            // Populate features
            const featuresContainer = document.getElementById('modalFeatures');
            featuresContainer.innerHTML = '';
            project.features.forEach(feature => {
                const featureItem = document.createElement('div');
                featureItem.className = 'feature-item';
                featureItem.innerHTML = `
                    <div class="feature-icon">${feature.icon}</div>
                    <div class="feature-text">${feature.text}</div>
                `;
                featuresContainer.appendChild(featureItem);
            });
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(event) {
            if (event && event.target !== event.currentTarget && !event.target.classList.contains('modal-close')) {
                return;
            }
            
            const modal = document.getElementById('modalOverlay');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        // Prevent scrolling when modal is open
        window.addEventListener('scroll', function() {
            if (document.getElementById('modalOverlay').classList.contains('active')) {
                window.scrollTo(0, 0);
            }
        });