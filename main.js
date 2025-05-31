// Madden NFL 25 Rewards Generator
let selectedPlatform = "";
let selectedGifts = [];
const formSection = document.getElementById('form-section');
const generatorSection = document.getElementById('generator');
const finalSection = document.getElementById('final');
const usernameInput = document.getElementById('username');
const generatorStatus = document.getElementById('generatorStatus');
const generatorSubStatus = document.getElementById('generatorSubStatus');
const progressFill = document.getElementById('progressFill');

// Platform selection logic
document.querySelectorAll('.platform-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedPlatform = btn.dataset.value;
  }
});

// Gift/reward selection logic
document.querySelectorAll('.gift-card').forEach(card => {
  card.onclick = () => {
    card.classList.toggle('selected');
    const g = card.dataset.gift;
    if (card.classList.contains('selected')) {
      selectedGifts.push(g);
    } else {
      selectedGifts = selectedGifts.filter(e => e !== g);
    }
  }
});

// Generator simulation function
function startGenerator() {
  const username = usernameInput.value.trim();
  if (!username) {
    alert('Please enter your Madden NFL 25 username or ID.');
    return;
  }
  if (!selectedPlatform) {
    alert('Please select your platform.');
    return;
  }
  if (selectedGifts.length === 0) {
    alert('Please select at least one reward type.');
    return;
  }

  // Hide form, show generator
  formSection.style.display = 'none';
  generatorSection.style.display = 'block';

  // Generator Simulation Steps with football-themed messages
  const totalDuration = 4200; // Total time in milliseconds
  const steps = [
    { delay: 0,    status: "Connecting to EA Servers...",    subStatus: `Platform: ${selectedPlatform}` },
    { delay: 800,  status: "Authenticating User...",         subStatus: `Account: ${username}` },
    { delay: 1600, status: "Accessing Ultimate Team...",     subStatus: `Selected: ${selectedGifts.join(', ')}` },
    { delay: 2500, status: "Adding Resources...",            subStatus: "Bypassing EA verification..." },
    { delay: 3500, status: "Finalizing Transaction...",      subStatus: "Preparing your rewards..." }
  ];

  // Apply CSS animation to progress bar
  progressFill.style.width = '0%';
  progressFill.style.animation = `fillBar ${totalDuration / 1000}s linear forwards`;

  // Schedule status updates
  steps.forEach(step => {
    setTimeout(() => {
      generatorStatus.textContent = step.status;
      generatorSubStatus.textContent = step.subStatus;
    }, step.delay);
  });

  // Schedule the final step reveal
  setTimeout(() => {
    if (generatorSection) generatorSection.style.display = 'none';
    if (finalSection) finalSection.style.display = 'block';
    
    // Reset progress bar
    if (progressFill) {
      progressFill.style.animation = 'none';
      progressFill.style.width = '0%';
    }
  }, totalDuration);
}

// Allow pressing Enter key in username field
usernameInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    startGenerator();
  }
});