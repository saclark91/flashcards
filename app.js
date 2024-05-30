angular.module('flashcardsApp', [])

    .service('FlashcardsService', function () {
        var flashcards = [
            {
                "title": "Event Viewer",
                "subtitle": "Executable and Description",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "eventvwr.msc"},
                    {"title": "Description:", "description": "A tool for viewing and analyzing Windows event logs."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Disk Management",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "diskmgmt.msc"},
                    {"title": "Description:", "description": "A utility for managing disk drives and volumes."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Task Scheduler",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "taskschd.msc"},
                    {"title": "Description:", "description": "A tool for scheduling automated tasks."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Device Manager",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "devmgmt.msc"},
                    {"title": "Description:", "description": "A tool for managing device drivers and hardware devices."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Certificate Manager",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "certmgr.msc"},
                    {"title": "Description:", "description": "A tool for managing digital certificates."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Local Users and Groups",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "lusrmgr.msc"},
                    {"title": "Description:", "description": "A tool for managing local user accounts and groups."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Performance Monitor",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "perfmon.msc"},
                    {"title": "Description:", "description": "A tool for monitoring system performance counters."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Group Policy Editor",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "gpedit.msc"},
                    {"title": "Description:", "description": "A tool for managing group policies on a local computer."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "System Information",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "msinfo32.exe"},
                    {"title": "Description:", "description": "A tool for displaying detailed information about your computer's hardware and software."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Resource Monitor",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "resmon.exe"},
                    {"title": "Description:", "description": "A tool for monitoring system resource usage in real-time."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "System Configuration",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "msconfig.exe"},
                    {"title": "Description:", "description": "A tool for configuring system startup settings and services."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Disk Cleanup",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "cleanmgr.exe"},
                    {"title": "Description:", "description": "A utility for freeing up disk space by removing unnecessary files."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Disk Defragment",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "dfrgui.exe"},
                    {"title": "Description:", "description": "A utility for optimizing disk performance by defragmenting files and folders."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            },
            {
                "title": "Registry Editor",
                "details": [
                    {"title": "Executable/Snap-in:", "description": "regedit.exe"},
                    {"title": "Description:", "description": "A tool for viewing and editing the Windows registry."}
                ],
                "counts": {"viewed": 0, "correct": 0, "revisit": 0, "incorrect": 0}
            }
        ];

        this.getFlashcards = function () {
            return flashcards;
        };

        // Other methods to manipulate flashcards data if needed
    })
    .controller('FlashcardsController', ['FlashcardsService', function (FlashcardsService) {
        var vm = this;
        vm.flashcards = FlashcardsService.getFlashcards();

        // Initialize active tab
        vm.activeTab = 'flashcards';

        // Method to set active tab
        vm.setActiveTab = function (tab) {
            vm.activeTab = tab;
        };

        
        // Index of the current flashcard
        vm.currentFlashcardIndex = 0;

        // Function to switch to the next flashcard
        vm.nextFlashcard = function () {
            vm.currentFlashcardIndex = (vm.currentFlashcardIndex + 1) % vm.flashcards.length; // Increment index and wrap around if necessary
            vm.flashcard = vm.flashcards[vm.currentFlashcardIndex]; // Set the current flashcard
        };

        // Function to switch to the previous flashcard
        vm.prevFlashcard = function () {
            vm.currentFlashcardIndex = (vm.currentFlashcardIndex - 1 + vm.flashcards.length) % vm.flashcards.length; // Decrement index and wrap around if necessary
            vm.flashcard = vm.flashcards[vm.currentFlashcardIndex]; // Set the current flashcard
        };

        // Initialize the current flashcard
        vm.flashcard = vm.flashcards[vm.currentFlashcardIndex];

        // Initialize counters
        vm.showFront = true;
        vm.viewCount = vm.flashcard.counts.viewed;
        vm.correctCount = vm.flashcard.counts.correct;
        vm.revisitCount = vm.flashcard.counts.revisit;
        vm.incorrectCount = vm.flashcard.counts.incorrect;

        // Function to flip the flashcard
        vm.flipCard = function () {
            vm.showFront = !vm.showFront;
        };

        // Function to record user response
        vm.recordVisit = function (choice) {
            if (choice === 'Correct') {
                vm.flashcard.counts.correct++;
                vm.showFront = true;
            } else if (choice === 'Revisit') {
                vm.flashcard.counts.revisit++;
                vm.showFront = true;
            } else if (choice === 'Incorrect') {
                vm.flashcard.counts.incorrect++;
                vm.showFront = true;
            }
            vm.flashcard.counts.viewed++;
            vm.currentFlashcardIndex = (vm.currentFlashcardIndex + 1) % vm.flashcards.length; // Increment index and wrap around if necessary
            vm.flashcard = vm.flashcards[vm.currentFlashcardIndex]; // Set the current flashcard
        };
    }]);