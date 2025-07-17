import { ModuleFields } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import CRMAppIsland from './CRMAppIsland?island';

export function Component({ fieldValues }) {
  return (
    <div className="crm-app-container">
      <Island
        id="crm-app"
        module={CRMAppIsland}
        fieldValues={fieldValues}
      />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    {/* Add any configurable fields here if needed */}
  </ModuleFields>
);

export const meta = {
  label: 'CRM React Application',
};