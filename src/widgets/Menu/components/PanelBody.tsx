import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import { Text } from "../../../components/Text";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<PushedProps>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: ${({ isPushed }) => isPushed ? "16px" : "16px 0px"};
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav?.(false) : undefined;

  return (
    <Container isPushed={isPushed}>

      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon spin={entry.spin} width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry isPushed={isPushed} key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href} target={item.external ? "_blank" : "_self"}>
                      {item.label}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }

        if (!entry.href) {
          return (
            isPushed ? (
              <>
                <hr />
                <Text as="p">{entry.label}</Text>
              </>
            ) : <hr />
          );
        }

        if (!entry.external) {
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
    </Container>
  );
};

export default PanelBody;
