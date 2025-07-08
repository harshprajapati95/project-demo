// B.Sc. Computer Science Semester Data Structure
const bscCSData = {
    1: {
        title: 'First Semester',
        subjects: {
            'programming-fundamentals': {
                title: 'Programming Fundamentals',
                code: 'CSC101',
                icon: 'fas fa-code',
                description: 'Introduction to programming with C language'
            },
            'computer-fundamentals': {
                title: 'Computer Fundamentals',
                code: 'CSC102',
                icon: 'fas fa-desktop',
                description: 'Basic computer concepts and architecture'
            },
            'mathematics-1': {
                title: 'Mathematics I',
                code: 'MAT101',
                icon: 'fas fa-square-root-alt',
                description: 'Calculus and analytical geometry'
            },
            'english': {
                title: 'English Communication',
                code: 'ENG101',
                icon: 'fas fa-book',
                description: 'Communication skills and technical writing'
            },
            'physics': {
                title: 'Physics',
                code: 'PHY101',
                icon: 'fas fa-atom',
                description: 'Basic physics concepts for computer science'
            }
        }
    },
    2: {
        title: 'Second Semester',
        subjects: {
            'object-oriented-programming': {
                title: 'Object Oriented Programming',
                code: 'CSC201',
                icon: 'fas fa-cubes',
                description: 'OOP concepts using C++ and Java'
            },
            'data-structures': {
                title: 'Data Structures',
                code: 'CSC202',
                icon: 'fas fa-sitemap',
                description: 'Linear and non-linear data structures'
            },
            'discrete-mathematics': {
                title: 'Discrete Mathematics',
                code: 'MAT201',
                icon: 'fas fa-calculator',
                description: 'Logic, sets, and discrete structures'
            },
            'digital-electronics': {
                title: 'Digital Electronics',
                code: 'ELC201',
                icon: 'fas fa-microchip',
                description: 'Digital circuits and logic design'
            },
            'mathematics-2': {
                title: 'Mathematics II',
                code: 'MAT202',
                icon: 'fas fa-square-root-alt',
                description: 'Advanced calculus and linear algebra'
            }
        }
    },
    3: {
        title: 'Third Semester',
        subjects: {
            'database-management': {
                title: 'Database Management Systems',
                code: 'CSC301',
                icon: 'fas fa-database',
                description: 'Database design and SQL programming'
            },
            'computer-networks': {
                title: 'Computer Networks',
                code: 'CSC302',
                icon: 'fas fa-network-wired',
                description: 'Network protocols and architectures'
            },
            'algorithms': {
                title: 'Algorithm Analysis',
                code: 'CSC303',
                icon: 'fas fa-project-diagram',
                description: 'Algorithm design and complexity analysis'
            },
            'operating-systems': {
                title: 'Operating Systems',
                code: 'CSC304',
                icon: 'fas fa-cogs',
                description: 'OS concepts and system programming'
            },
            'statistics': {
                title: 'Statistics',
                code: 'STA301',
                icon: 'fas fa-chart-bar',
                description: 'Statistical methods for computer science'
            }
        }
    },
    4: {
        title: 'Fourth Semester',
        subjects: {
            'web-development': {
                title: 'Web Development',
                code: 'CSC401',
                icon: 'fas fa-globe',
                description: 'HTML, CSS, JavaScript, and web frameworks'
            },
            'software-engineering': {
                title: 'Software Engineering',
                code: 'CSC402',
                icon: 'fas fa-tools',
                description: 'Software development lifecycle and methodologies'
            },
            'computer-graphics': {
                title: 'Computer Graphics',
                code: 'CSC403',
                icon: 'fas fa-paint-brush',
                description: 'Graphics programming and visualization'
            },
            'numerical-methods': {
                title: 'Numerical Methods',
                code: 'MAT401',
                icon: 'fas fa-calculator',
                description: 'Computational mathematics and algorithms'
            },
            'system-analysis': {
                title: 'System Analysis & Design',
                code: 'CSC404',
                icon: 'fas fa-drafting-compass',
                description: 'System design and analysis techniques'
            }
        }
    },
    5: {
        title: 'Fifth Semester',
        subjects: {
            'artificial-intelligence': {
                title: 'Artificial Intelligence',
                code: 'CSC501',
                icon: 'fas fa-brain',
                description: 'AI concepts and machine learning basics'
            },
            'compiler-design': {
                title: 'Compiler Design',
                code: 'CSC502',
                icon: 'fas fa-code-branch',
                description: 'Language processing and compiler construction'
            },
            'mobile-computing': {
                title: 'Mobile Computing',
                code: 'CSC503',
                icon: 'fas fa-mobile-alt',
                description: 'Mobile app development and technologies'
            },
            'information-security': {
                title: 'Information Security',
                code: 'CSC504',
                icon: 'fas fa-shield-alt',
                description: 'Cybersecurity and data protection'
            },
            'elective-1': {
                title: 'Elective I',
                code: 'CSC505',
                icon: 'fas fa-star',
                description: 'Choose from available specialization subjects'
            }
        }
    },
    6: {
        title: 'Sixth Semester',
        subjects: {
            'project-work': {
                title: 'Final Year Project',
                code: 'CSC601',
                icon: 'fas fa-project-diagram',
                description: 'Capstone project and research work'
            },
            'cloud-computing': {
                title: 'Cloud Computing',
                code: 'CSC602',
                icon: 'fas fa-cloud',
                description: 'Cloud platforms and distributed computing'
            },
            'data-mining': {
                title: 'Data Mining',
                code: 'CSC603',
                icon: 'fas fa-search',
                description: 'Data analysis and knowledge discovery'
            },
            'human-computer-interaction': {
                title: 'Human Computer Interaction',
                code: 'CSC604',
                icon: 'fas fa-users',
                description: 'UI/UX design and usability principles'
            },
            'elective-2': {
                title: 'Elective II',
                code: 'CSC605',
                icon: 'fas fa-star',
                description: 'Advanced specialization subject'
            },
            'internship': {
                title: 'Industrial Training',
                code: 'CSC606',
                icon: 'fas fa-building',
                description: 'Practical industry experience'
            }
        }
    }
};

// Comprehensive Notes Content for B.Sc. Computer Science
const notesDatabase = {};

// Sample content structure for each subject
const sampleContentStructure = {
    'teacher-notes': [],
    'student-notes': [],
    'resources': [],
    'assignments': [],
    'pyqs': [],
    'syllabus': []
};

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const modal = document.getElementById('subject-modal');
const modalTitle = document.getElementById('modal-subject-title');
const modalContentArea = document.getElementById('modal-content-area');

// Global variables
let selectedSemester = 0;

// Navigation functionality
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}



// Semester selection functionality
function selectSemester(semesterNumber) {
    selectedSemester = semesterNumber;
    
    if (bscCSData[semesterNumber]) {
        const semester = bscCSData[semesterNumber];
        
        // Update UI
        document.getElementById('selected-semester-info').textContent = semester.title;
        
        // Load subjects
        loadSubjects(semester.subjects);
        
        // Show subjects section
        document.getElementById('semesters').style.display = 'none';
        document.getElementById('subjects-list').style.display = 'block';
        
        // Add animation and scroll
        const subjectsSection = document.getElementById('subjects-list');
        subjectsSection.classList.add('fade-in');
        subjectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Load subjects for selected semester
function loadSubjects(subjects) {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    Object.keys(subjects).forEach((subjectKey, index) => {
        const subject = subjects[subjectKey];
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';
        subjectCard.style.animationDelay = `${index * 0.1}s`;
        subjectCard.onclick = () => openSubject(subjectKey, subject);
        
        subjectCard.innerHTML = `
            <div class="subject-icon">
                <i class="${subject.icon}"></i>
            </div>
            <h3>${subject.title}</h3>
            <p>${subject.description}</p>
            <span class="subject-code">${subject.code}</span>
        `;
        
        container.appendChild(subjectCard);
    });
}

// Navigation functions
function goBackToCourses() {
    document.getElementById('semesters').style.display = 'none';
    document.getElementById('subjects').style.display = 'block';
    document.getElementById('subjects').scrollIntoView({ behavior: 'smooth' });
}

function goBackToSemesters() {
    document.getElementById('subjects-list').style.display = 'none';
    document.getElementById('semesters').style.display = 'block';
    document.getElementById('semesters').scrollIntoView({ behavior: 'smooth' });
}

// Open subject modal
function openSubject(subjectKey, subjectData) {
    modalTitle.textContent = subjectData.title;
    modal.style.display = 'block';
    showTab('teacher-notes');
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
    if (event.target === document.getElementById('add-content-modal')) {
        closeAddContentModal();
    }
});

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Content management storage (using localStorage)
let contentDatabase = JSON.parse(localStorage.getItem('contentDatabase')) || {};

// Open add content modal
function openAddContentModal(tabName) {
    const addContentModal = document.getElementById('add-content-modal') || createAddContentModal();
    document.getElementById('add-content-tab-name').textContent = tabName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    document.getElementById('content-title-input').value = '';
    document.getElementById('content-description-input').value = '';
    document.getElementById('content-type-select').value = 'PDF';
    addContentModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Store current tab and subject for saving
    const currentSubjectKey = findSubjectKeyByTitle(document.getElementById('modal-subject-title').textContent);
    addContentModal.dataset.tabName = tabName;
    addContentModal.dataset.subjectKey = currentSubjectKey;
}

// Create add content modal if it doesn't exist
function createAddContentModal() {
    const modalHTML = `
        <div id="add-content-modal" class="modal">
            <div class="modal-content add-content-modal-content">
                <div class="modal-header">
                    <h2>Add Content</h2>
                    <span class="close-btn" onclick="closeAddContentModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <h3>Add to: <span id="add-content-tab-name"></span></h3>
                    <form id="add-content-form" onsubmit="saveContent(event)">
                        <div class="form-group">
                            <label for="content-title-input">Title:</label>
                            <input type="text" id="content-title-input" required placeholder="Enter content title...">
                        </div>
                        <div class="form-group">
                            <label for="content-description-input">Description:</label>
                            <textarea id="content-description-input" required placeholder="Enter content description..." rows="4"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="content-type-select">Content Type:</label>
                            <select id="content-type-select" required>
                                <option value="PDF">PDF Document</option>
                                <option value="DOC">Word Document</option>
                                <option value="PPT">Presentation</option>
                                <option value="VIDEO">Video</option>
                                <option value="AUDIO">Audio</option>
                                <option value="LINK">Web Link</option>
                                <option value="TEXT">Text Note</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="content-size-input">File Size (optional):</label>
                            <input type="text" id="content-size-input" placeholder="e.g., 2.5 MB, 1.2 GB">
                        </div>
                        <div class="form-actions">
                            <button type="button" onclick="closeAddContentModal()" class="cancel-btn">Cancel</button>
                            <button type="submit" class="save-btn">Add Content</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    return document.getElementById('add-content-modal');
}

// Close add content modal
function closeAddContentModal() {
    const addContentModal = document.getElementById('add-content-modal');
    if (addContentModal) {
        addContentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Save content
function saveContent(event) {
    event.preventDefault();
    
    const addContentModal = document.getElementById('add-content-modal');
    const tabName = addContentModal.dataset.tabName;
    const subjectKey = addContentModal.dataset.subjectKey;
    const title = document.getElementById('content-title-input').value.trim();
    const description = document.getElementById('content-description-input').value.trim();
    const type = document.getElementById('content-type-select').value;
    const size = document.getElementById('content-size-input').value.trim() || 'Unknown size';
    
    if (!title || !description) {
        alert('Please fill in both title and description.');
        return;
    }
    
    // Initialize subject content if not exists
    if (!contentDatabase[subjectKey]) {
        contentDatabase[subjectKey] = {};
    }
    if (!contentDatabase[subjectKey][tabName]) {
        contentDatabase[subjectKey][tabName] = [];
    }
    
    // Create new content item
    const newContent = {
        id: Date.now(),
        title: title,
        description: description,
        type: type,
        size: size,
        date: new Date().toISOString().split('T')[0],
        author: 'Admin'
    };
    
    // Add to content database
    contentDatabase[subjectKey][tabName].push(newContent);
    
    // Save to localStorage
    localStorage.setItem('contentDatabase', JSON.stringify(contentDatabase));
    
    // Close modal
    closeAddContentModal();
    
    // Refresh the current tab display
    showTab(tabName);
    
    // Show success message
    showSuccessNotification(`${type} added successfully to ${tabName.replace('-', ' ')}!`);
}

// Show success notification
function showSuccessNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Update showTab function to use stored content
function showTab(tabName) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Find and activate the clicked tab
    tabButtons.forEach(button => {
        if (button.textContent.toLowerCase().includes(tabName.replace('-', ' '))) {
            button.classList.add('active');
        }
    });
    
    // Get current subject key from modal title
    const modalTitle = document.getElementById('modal-subject-title').textContent;
    const currentSubjectKey = findSubjectKeyByTitle(modalTitle);
    
    // Check if we have stored content for this subject and tab
    const storedContent = contentDatabase[currentSubjectKey] && contentDatabase[currentSubjectKey][tabName];
    if (storedContent && storedContent.length > 0) {
        displayTabContent(tabName, storedContent);
    } else {
        // Check if we have real content for this subject and tab
        const realContent = notesDatabase[currentSubjectKey] && notesDatabase[currentSubjectKey][tabName];
        if (realContent) {
            displayRealContent(tabName, realContent);
        } else {
            displayTabContent(tabName, sampleContentStructure[tabName] || []);
        }
    }
}

// Find subject key by title
function findSubjectKeyByTitle(title) {
    for (let semesterNum in bscCSData) {
        const subjects = bscCSData[semesterNum].subjects;
        for (let key in subjects) {
            if (subjects[key].title === title) {
                return key;
            }
        }
    }
    return null;
}

// Display tab content
function displayTabContent(tabName, items) {
    if (!items || items.length === 0) {
        modalContentArea.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #666;">
                <div class="tab-header">
                    <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>No ${tabName.replace('-', ' ')} available yet.</p>
                    <p style="font-size: 0.9rem;">Content will be added soon.</p>
                </div>
                <button class="add-content-btn" onclick="openAddContentModal('${tabName}')" title="Add ${tabName.replace('-', ' ')}">
                    <i class="fas fa-plus"></i> Add ${tabName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
            </div>
        `;
        return;
    }

    let content = `
        <div class="tab-content-header">
            <h3>${tabName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
            <button class="add-content-btn-small" onclick="openAddContentModal('${tabName}')" title="Add ${tabName.replace('-', ' ')}">
                <i class="fas fa-plus"></i> Add New
            </button>
        </div>
    `;
    
    items.forEach(item => {
        content += `
            <div class="content-item">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; font-size: 0.8rem; color: #888;">
                    <span><i class="fas fa-file-${item.type.toLowerCase()}"></i> ${item.type} • ${item.size}</span>
                    <span><i class="fas fa-calendar"></i> ${item.date}</span>
                </div>
                <button class="download-btn" onclick="downloadItem('${item.title}', '${item.type}')">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        `;
    });
    
    modalContentArea.innerHTML = content;
}

// Display real content (for subjects that have detailed content)
function displayRealContent(tabName, contentArray) {
    let content = '';
    contentArray.forEach((item, index) => {
        content += `
            <div class="content-item real-content-item">
                <h4>${item.title}</h4>
                <div class="content-body">
                    ${item.content}
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; font-size: 0.8rem; color: #888;">
                    <span><i class="fas fa-user"></i> ${item.author}</span>
                    <span><i class="fas fa-calendar"></i> ${item.date}</span>
                </div>
            </div>
        `;
    });
    
    modalContentArea.innerHTML = content;
}

// Download item (placeholder function)
function downloadItem(title, type) {
    // In a real implementation, this would trigger an actual download
    alert(`Downloading: ${title} (${type})\n\nNote: This is a demo. In a real implementation, the file would be downloaded.`);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('EduHub loaded successfully!');
    
    // Register Service Worker for offline functionality
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
});
