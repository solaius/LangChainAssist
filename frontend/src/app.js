// src/app.js

import React, { useState } from 'react';
import { ThemeProvider } from './theme-context';
import '@patternfly/react-core/dist/styles/base.css';
// import './app.css';

import { Avatar, Brand, Breadcrumb, BreadcrumbItem, Button, ButtonVariant, Card, CardBody, Divider, Dropdown, DropdownGroup, DropdownItem, DropdownList, Flex, FlexItem, Grid, GridItem, Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle, MenuToggle, Nav, NavItem, NavList, Page, PageSection, PageSectionVariants, PageSidebar, PageSidebarBody, PageToggleButton, ProgressStep, ProgressStepper, SkipToContent, Text, TextContent, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Label } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from './images/avatar.png';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import RHCAILogo from './images/RHCAI.png';

import PriorAuthRequest from './components/PriorAuthRequest/prior_auth_request';
import PriorAuthSummary from './components/PriorAuthSummary/prior_auth_summary';
import PatientData from './components/PatientData/patient_data';
import ClinicalPracticeGuidelines from './components/ClinicalPracticeGuidelines/clinical_practice_guidelines';
import PolicyInfo from './components/PolicyInfo/policy_info';

import logo from './images/rh_insurance.png';
import ClaimApproved from './components/ClaimApproved/ClaimApproved';

const App = () => {

  const [currentSection, setCurrentSection] = useState(0);

  const handleNextSection = () => {
    if (currentSection < 4) {
      setCurrentSection((prevSection) => (prevSection + 1))
    }
  }

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection((prevSection) => (prevSection - 1))
    }
  }

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(2);
  const onNavSelect = (_event, selectedItem) => {
    typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
  };
  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const onDropdownSelect = () => {
    setIsDropdownOpen(false);
  };
  const onKebabDropdownToggle = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };
  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(false);
  };
  const onFullKebabDropdownToggle = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  };
  const onFullKebabDropdownSelect = () => {
    setIsFullKebabDropdownOpen(false);
  };
  const dashboardBreadcrumb = <Breadcrumb>
    <BreadcrumbItem to="#">Policies</BreadcrumbItem>
    <BreadcrumbItem to="#">Claims</BreadcrumbItem>
    <BreadcrumbItem to="#" isActive>
      CL-2467802
    </BreadcrumbItem>
  </Breadcrumb>;
  const kebabDropdownItems = <>
    <DropdownItem>
      <CogIcon /> Settings
    </DropdownItem>
    <DropdownItem>
      <HelpIcon /> Help
    </DropdownItem>
  </>;
  const userDropdownItems = <>
    <DropdownItem key="group 2 profile">My profile</DropdownItem>
    <DropdownItem key="group 2 user">User management</DropdownItem>
    <DropdownItem key="group 2 logout">Logout</DropdownItem>
  </>;
  const headerToolbar = <Toolbar id="toolbar" isFullHeight isStatic>
    <ToolbarContent>
      <ToolbarGroup variant="icon-button-group" align={{
        default: 'alignRight'
      }} spacer={{
        default: 'spacerNone',
        md: 'spacerMd'
      }}>
        <ToolbarItem>
          <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} />
        </ToolbarItem>
        <ToolbarGroup variant="icon-button-group" visibility={{
          default: 'hidden',
          lg: 'visible'
        }}>
          <ToolbarItem>
            <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
          </ToolbarItem>
          <ToolbarItem>
            <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem visibility={{
          default: 'hidden',
          md: 'visible',
          lg: 'hidden'
        }}>
          <Dropdown isOpen={isKebabDropdownOpen} onSelect={onKebabDropdownSelect} onOpenChange={isOpen => setIsKebabDropdownOpen(isOpen)} popperProps={{
            position: 'right'
          }} toggle={toggleRef => <MenuToggle ref={toggleRef} onClick={onKebabDropdownToggle} isExpanded={isKebabDropdownOpen} variant="plain" aria-label="Settings and help">
            <EllipsisVIcon aria-hidden="true" />
          </MenuToggle>}>
            <DropdownList>{kebabDropdownItems}</DropdownList>
          </Dropdown>
        </ToolbarItem>
        <ToolbarItem visibility={{
          md: 'hidden'
        }}>
          <Dropdown isOpen={isFullKebabDropdownOpen} onSelect={onFullKebabDropdownSelect} onOpenChange={isOpen => setIsFullKebabDropdownOpen(isOpen)} popperProps={{
            position: 'right'
          }} toggle={toggleRef => <MenuToggle ref={toggleRef} onClick={onFullKebabDropdownToggle} isExpanded={isFullKebabDropdownOpen} variant="plain" aria-label="Toolbar menu">
            <EllipsisVIcon aria-hidden="true" />
          </MenuToggle>}>
            <DropdownGroup key="group 2" aria-label="User actions">
              <DropdownList>{userDropdownItems}</DropdownList>
            </DropdownGroup>
            <Divider />
            <DropdownList>{kebabDropdownItems}</DropdownList>
          </Dropdown>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem visibility={{
        default: 'hidden',
        md: 'visible'
      }}>
        <Dropdown isOpen={isDropdownOpen} onSelect={onDropdownSelect} onOpenChange={isOpen => setIsDropdownOpen(isOpen)} popperProps={{
          position: 'right'
        }} toggle={toggleRef => <MenuToggle ref={toggleRef} onClick={onDropdownToggle} isFullHeight isExpanded={isDropdownOpen} icon={<Avatar src={imgAvatar} alt="" />}>
          Dean Peterson
        </MenuToggle>}>
          <DropdownList>{userDropdownItems}</DropdownList>
        </Dropdown>
      </ToolbarItem>
    </ToolbarContent>
  </Toolbar>;

  const masthead = <Masthead>
    <MastheadToggle>
      <PageToggleButton variant="plain" aria-label="Global navigation">
        <BarsIcon />
      </PageToggleButton>
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand>
        <Flex alignItems={{ default: 'alignItemsCenter' }} style={{ gap: '8px' }}>
          <FlexItem style={{ margin: 0 }}>
            <Brand src={logo} alt="PatternFly" heights={{
              default: '36px'
            }} style={{ verticalAlign: 'middle' }} />
          </FlexItem>
          <FlexItem style={{ fontFamily: 'Red Hat Display', fontSize: 18 }}>
            <span style={{ fontWeight: 600 }}>Red Hat Insurance</span> <span>Utilization Portal</span>
          </FlexItem>
        </Flex>
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>{headerToolbar}</MastheadContent>
  </Masthead>;

  const pageNav = <Nav onSelect={onNavSelect}>
    <NavList>
      <NavItem itemId={0} isActive={activeItem === 0}>Dashboard</NavItem>
      <NavItem itemId={1} isActive={activeItem === 1}>Clients</NavItem>
      <NavItem itemId={2} isActive={activeItem === 2}>Policies</NavItem>
      <NavItem itemId={3} isActive={activeItem === 3}>Claims</NavItem>
      <NavItem itemId={4} isActive={activeItem === 4}>Providers</NavItem>
      <NavItem itemId={5} isActive={activeItem === 5}>Renewals</NavItem>
      <NavItem itemId={6} isActive={activeItem === 6}>Reports</NavItem>
    </NavList>
  </Nav>;

  const sidebar = <PageSidebar>
    <PageSidebarBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {pageNav}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16 }}>
        <img src={RHCAILogo} alt="" style={{ width: 40, height: 40 }} />
        <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Red Hat Display', fontSize: 14 }}>
          <span style={{ color: '#d2d2d2' }}>Built with</span>
          <span style={{ fontWeight: 500 }}>Red Hat Composer AI</span>
        </div>
      </div>
    </PageSidebarBody>
  </PageSidebar>;

  const mainContainerId = 'main-content';

  const pageSkipToContent = <SkipToContent href={`#${mainContainerId}`}>Skip to content</SkipToContent>;

  return (
    <ThemeProvider>
      <Page
        header={masthead}
        sidebar={sidebar}
        isManagedSidebar
        skipToContent={pageSkipToContent}
        breadcrumb={dashboardBreadcrumb}
        mainContainerId={mainContainerId}
        isBreadcrumbWidthLimited
        isBreadcrumbGrouped
        additionalGroupedContent={
          <PageSection variant={PageSectionVariants.light} isWidthLimited>
            <TextContent>
              <Flex alignItems={{ default: 'alignItemsCenter' }} gap={{ default: 'gapSm' }}>
                <FlexItem>
                  <Text component="h1">Claim CL-2467802</Text>
                </FlexItem>
                <FlexItem>
                  <Label color="blue" icon={<InfoCircleIcon />}>In review</Label>
                </FlexItem>
              </Flex>
            </TextContent>
          </PageSection>
        }
        groupProps={{
          stickyOnBreakpoint: {
            default: 'top'
          }
        }}>
        <PageSection>
          <Grid hasGutter style={{ gap: 24 }}>
            <GridItem span={12}>
              <Grid>
                <GridItem span={2} style={{ alignSelf: 'center' }}>
                  <Button variant="tertiary" isDisabled={currentSection === 5}>Cancel</Button>
                </GridItem>
                <GridItem span={8}>
                  <ProgressStepper isCenterAligned>
                    <ProgressStep variant={currentSection > 0 ? 'success' : 'info'}>Prior Auth</ProgressStep>
                    <ProgressStep variant={currentSection > 1 ? 'success' : currentSection === 1 ? 'info' : 'pending'}>Patient Data</ProgressStep>
                    <ProgressStep variant={currentSection > 2 ? 'success' : currentSection === 2 ? 'info' : 'pending'}>Guidelines</ProgressStep>
                    <ProgressStep variant={currentSection > 3 ? 'success' : currentSection === 3 ? 'info' : 'pending'}>Insurance</ProgressStep>
                    <ProgressStep variant={currentSection > 4 ? 'success' : currentSection === 4 ? 'info' : 'pending'}>Claim Summary</ProgressStep>
                  </ProgressStepper>
                </GridItem>
                <GridItem span={2} style={{ alignSelf: 'center', justifySelf: 'end' }}>
                  <Button variant="secondary" style={{ marginRight: 8 }} onClick={handlePrevSection} isDisabled={currentSection === 0 || currentSection > 4}>Prev</Button>
                  <Button onClick={handleNextSection} isDisabled={currentSection >= 4}>Next</Button>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem span={8} offset={2}>
              <Card isRounded>
                <CardBody style={{ paddingBlockStart: '1.5rem' }}>
                  {currentSection === 0 && <PriorAuthRequest currentSection={currentSection} />}
                  {currentSection === 1 && <PatientData currentSection={currentSection} />}
                  {currentSection === 2 && <ClinicalPracticeGuidelines currentSection={currentSection} />}
                  {currentSection === 3 && <PolicyInfo currentSection={currentSection} />}
                  {currentSection === 4 && <PriorAuthSummary currentSection={currentSection} setCurrentSection={setCurrentSection} />}
                  {currentSection === 5 && <ClaimApproved currentSection={currentSection} />}
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </PageSection>
      </Page>;

    </ThemeProvider>
  );
};

export default App;
