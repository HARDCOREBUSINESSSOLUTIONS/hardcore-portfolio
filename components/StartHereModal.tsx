
import React, { useState } from 'react';
import { X, ArrowRight, Check, Loader2, AlertCircle } from 'lucide-react';
import { CommissionIntent } from '../types';
import { submitLead } from '../services/leadService';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const StartHereModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [intent, setIntent] = useState<CommissionIntent | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [budget, setBudget] = useState('$5k - $15k');
  const [details, setDetails] = useState('');

  const intents: { id: CommissionIntent, label: string, desc: string, airtableValue: string }[] = [
    { id: 'ai_systems', label: 'AI SYSTEMS', desc: 'Custom agents & automation', airtableValue: 'Consultation' },
    { id: 'web_app', label: 'WEB DEPLOYMENT', desc: 'Scalable React/TS architectures', airtableValue: 'Project Inquiry' },
    { id: 'brand', label: 'BRAND IDENTITY', desc: 'Visual systems & presence', airtableValue: 'Project Inquiry' },
    { id: 'tattoo', label: 'TATTOO PROJECT', desc: 'High-concept visual art', airtableValue: 'Collaboration' },
    { id: 'unsure', label: 'NOT SURE YET', desc: 'Need guidance / Triage', airtableValue: 'Other' }
  ];

  const priorityOptions = [
    { label: 'Standard Delivery', value: 'Low' },
    { label: 'High Priority (Expedited)', value: 'High' },
    { label: 'Urgent Execution', value: 'Urgent' }
  ];

  const budgetOptions = [
    { label: '< $5k', value: 'Under $5k' },
    { label: '$5k - $15k', value: '$5k - $15k' },
    { label: '$15k - $50k', value: '$15k - $50k' },
    { label: '$50k+', value: '$50k+' }
  ];

  const resetForm = () => {
    setStep(1);
    setIntent(null);
    setFormStatus('idle');
    setErrorMessage('');
    setName('');
    setEmail('');
    setPriority('Medium');
    setBudget('$5k - $15k');
    setDetails('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      setErrorMessage('Name and email are required');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    const selectedIntent = intents.find(i => i.id === intent);

    const result = await submitLead({
      name: name.trim(),
      email: email.trim(),
      intent: selectedIntent?.airtableValue || 'Other',
      priority,
      budget,
      details: details.trim() || `Intent: ${selectedIntent?.label || 'Unknown'}`,
    });

    if (result.success) {
      setFormStatus('success');
    } else {
      setFormStatus('error');
      setErrorMessage(result.error || 'Submission failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={handleClose} />

      <div className="relative w-full max-w-2xl glass-panel border-[#00FFFF]/40 overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-8 border-b border-white/10 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-black tracking-tighter uppercase">
              {formStatus === 'success' ? 'Transmission Complete' : 'Initiate Pipeline'}
            </h3>
            <p className="text-[10px] font-mono text-[#00FFFF] tracking-widest uppercase">
              {formStatus === 'success' ? 'Signal received' : `Step ${step} of 2 // ${step === 1 ? 'Intent Detection' : 'Contact Data'}`}
            </p>
          </div>
          <button onClick={handleClose} className="p-2 text-white/40 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          {formStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00FFFF]/20 flex items-center justify-center">
                <Check size={32} className="text-[#00FFFF]" />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-wider mb-2">Lead Captured</h4>
              <p className="text-white/60 font-mono text-sm mb-6">
                Expect contact within 24-48 hours.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 border border-[#00FFFF] text-[#00FFFF] font-bold uppercase tracking-widest hover:bg-[#00FFFF] hover:text-black transition-all"
              >
                Close Terminal
              </button>
            </div>
          ) : step === 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {intents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setIntent(item.id); setStep(2); }}
                  className="p-6 glass-panel border-white/5 hover:border-[#00FFFF]/50 hover:bg-[#00FFFF]/5 text-left transition-all group"
                >
                  <div className="text-lg font-bold tracking-widest mb-1 group-hover:text-[#00FFFF]">{item.label}</div>
                  <div className="text-xs text-white/40">{item.desc}</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-[#00FFFF]/5 border border-[#00FFFF]/20 rounded flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#00FFFF]/60 font-mono tracking-widest uppercase">Target Intent</div>
                  <div className="text-xl font-bold uppercase tracking-wider">{intent?.replace('_', ' ')}</div>
                </div>
                <button onClick={() => setStep(1)} className="text-[10px] text-white/40 hover:text-white underline">Change</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest">Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-black border border-white/10 rounded p-3 text-sm focus:border-[#00FFFF] outline-none placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-black border border-white/10 rounded p-3 text-sm focus:border-[#00FFFF] outline-none placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest">Priority level</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded p-3 text-sm focus:border-[#00FFFF] outline-none"
                  >
                    {priorityOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest">Budget Range</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded p-3 text-sm focus:border-[#00FFFF] outline-none"
                  >
                    {budgetOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest">Project Details</label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Brief description of your project or requirements..."
                  rows={3}
                  className="w-full bg-black border border-white/10 rounded p-3 text-sm focus:border-[#00FFFF] outline-none placeholder:text-white/20 resize-none"
                />
              </div>

              {formStatus === 'error' && errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  {errorMessage}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-[#00FFFF] text-black font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    Submit Intake <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartHereModal;
