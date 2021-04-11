import React from "react";
import styled from "styled-components";
import { CogIcon, SvgProps } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import * as IconModule from "../icons";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import { LinkLabel, MenuEntry } from "./MenuEntry";
import MenuLink from "./MenuLink";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<PushedProps>`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
  padding: ${({ isPushed }) => isPushed ? "16px" : "8px 4px"};
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  currentLang,
  langs,
  setLang,
  links,
  isMobile
}) => {
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav?.(false) : undefined;

  if (!isPushed) {
    return (
      <Container isPushed={false}>
        <IconButton variant="text" onClick={() => pushNav?.(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container isPushed={isPushed}>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (!entry.items && entry.external) {
          return (
            <MenuEntry isPushed={isPushed} key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
              <MenuLink href={entry.href} target={entry.external ? "_blank" : "_self"} onClick={handleClick}>
                {iconElement}
                <LinkLabel isPushed={isPushed} isActive={entry.href === location.pathname}>{entry.label}</LinkLabel>
              </MenuLink>
            </MenuEntry>
          );
        }

        return (<></>)
      })}
      <SocialEntry>
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
        <SocialLinks />
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
