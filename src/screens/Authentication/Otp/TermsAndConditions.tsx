import {
  BottomSheetModalProvider,
  BottomSheet,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Button from "../../../components/Form/Button";
import { tw } from "../../../utils";

interface TermsAndConditionsProps {}

const TermsAndConditions = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <Button
        onPress={handlePresentModalPress}
        textStyle={tw`text-primary body4`}
      >
        Terms and Conditions
      </Button>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetScrollView>
          <Text style={tw`body4`}>
            Conditions of use By using this website, you certify that you have
            read and reviewed this Agreement and that you agree to comply with
            its terms. If you do not want to be bound by the terms of this
            Agreement, you are advised to leave the website accordingly. Bat
            only grants use and access of this website, its products, and its
            services to those who have accepted its terms. Privacy policy Before
            you continue using our website, we advise you to read our privacy
            policy [link to privacy policy] regarding our user data collection.
            It will help you better understand our practices. Age restriction
            You must be at least 18 (eighteen) years of age before you can use
            this website. By using this website, you warrant that you are at
            least 18 years of age and you may legally adhere to this Agreement.
            Bat assumes no responsibility for liabilities related to age
            misrepresentation. Intellectual property You agree that all
            materials, products, and services provided on this website are the
            property of Bat, its affiliates, directors, officers, employees,
            agents, suppliers, or licensors including all copyrights, trade
            secrets, trademarks, patents, and other intellectual property. You
            also agree that you will not reproduce or redistribute the Bat’s
            intellectual property in any way, including electronic, digital, or
            new trademark registrations. You grant Bat a royalty-free and
            non-exclusive license to display, use, copy, transmit, and broadcast
            the content you upload and publish. For issues regarding
            intellectual property claims, you should contact the company in
            order to come to an agreement. User accounts As a user of this
            website, you may be asked to register with us and provide private
            information. You are responsible for ensuring the accuracy of this
            information, and you are responsible for maintaining the safety and
            security of your identifying information. You are also responsible
            for all activities that occur under your account or password. If you
            think there are any possible issues regarding the security of your
            account on the website, inform us immediately so we may address them
            accordingly. We reserve all rights to terminate accounts, edit or
            remove content and cancel orders at our sole discretion.  Terms and
            conditions template by WebsitePolicies.com Applicable law By
            visiting this website, you agree that the laws of the [location],
            without regard to principles of conflict laws, will govern these
            terms and conditions, or any dispute of any sort that might come
            between Bat and you, or its business partners and associates.
            Disputes Any dispute related in any way to your visit to this
            website or to products you purchase from us shall be arbitrated by
            state or federal court [location] and you consent to exclusive
            jurisdiction and venue of such courts. Indemnification You agree to
            indemnify Bat and its affiliates and hold Bat harmless against legal
            claims and demands that may arise from your use or misuse of our
            services. We reserve the right to select our own legal counsel.
            Limitation on liability Bat is not liable for any damages that may
            occur to you as a result of your misuse of our website. Bat reserves
            the right to edit, modify, and change this Agreement at any time. We
            shall let our users know of these changes through electronic mail.
            This Agreement is an understanding between Bat and the user, and
            this supersedes and replaces all prior agreements regarding the use
            of this website.
          </Text>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default TermsAndConditions;
